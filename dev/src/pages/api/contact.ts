import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectDetails?: unknown;
  existingUrl?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidOptionalUrl(value: unknown): boolean {
  if (value === undefined || value === null || value === "") {
    return true;
  }

  if (typeof value !== "string") {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  const body = (req.body ?? {}) as ContactBody;

  if (!isNonEmptyString(body.name)) {
    return res.status(400).json({ success: false, error: "Name is required." });
  }

  if (!isNonEmptyString(body.email) || !isValidEmail(body.email)) {
    return res.status(400).json({ success: false, error: "A valid email is required." });
  }

  if (!isNonEmptyString(body.projectDetails) || body.projectDetails.trim().length < 10) {
    return res
      .status(400)
      .json({ success: false, error: "Project details must be at least 10 characters." });
  }

  if (!isValidOptionalUrl(body.existingUrl)) {
    return res.status(400).json({ success: false, error: "Existing URL must be a valid URL." });
  }

  const submission = {
    name: body.name.trim(),
    email: body.email.trim(),
    company: typeof body.company === "string" ? body.company.trim() : "",
    projectDetails: body.projectDetails.trim(),
    existingUrl: typeof body.existingUrl === "string" ? body.existingUrl.trim() : "",
    submittedAt: new Date().toISOString(),
  };

  if (!resend || !fromEmail || !receiverEmail) {
    return res.status(500).json({
      success: false,
      error:
        "Email service is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_RECEIVER_EMAIL.",
    });
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: receiverEmail,
      subject: `New contact request from ${submission.name}`,
      replyTo: submission.email,
      text: [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Company / Organization: ${submission.company || "Not provided"}`,
        `Existing URL: ${submission.existingUrl || "Not provided"}`,
        "",
        "Project details:",
        submission.projectDetails,
        "",
        `Submitted at: ${submission.submittedAt}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact form email send failed:", error);
    return res.status(502).json({ success: false, error: "Failed to send message." });
  }

  return res.status(200).json({ success: true });
}
