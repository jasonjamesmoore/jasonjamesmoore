import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function isValidHttpUrl(value: string): boolean {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().optional(),
  projectDetails: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters."),
  existingUrl: z
    .string()
    .trim()
    .refine(
      (value) => value.length === 0 || isValidHttpUrl(value),
      "Please use a valid URL starting with http:// or https://."
    ),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  projectDetails: "",
  existingUrl: "",
};

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToastMessage(null);
      setToastType(null);
    }, 4200);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toastMessage]);

  const onSubmit = async (values: ContactFormValues) => {
    setStatusMessage(null);
    setStatusType(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company,
          projectDetails: values.projectDetails,
          existingUrl: values.existingUrl,
        }),
      });

      let result: { success?: boolean; error?: string } | null = null;
      try {
        result = (await response.json()) as { success?: boolean; error?: string };
      } catch {
        result = null;
      }

      if (!response.ok || !result?.success) {
        throw new Error(result?.error ?? "Something went wrong. Please try again.");
      }

      form.reset(initialValues);
      setStatusType("success");
      setStatusMessage("Thanks, your message has been sent.");
      setToastType("success");
      setToastMessage("Message sent successfully.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      setStatusType("error");
      setStatusMessage(message);
      setToastType("error");
      setToastMessage(message);
    }
  };

  return (
    <>
      <div
        className={[
          "pointer-events-none fixed bottom-6 right-6 z-50 max-w-sm rounded-md border px-4 py-3 text-sm shadow-lg transition-all duration-300",
          toastMessage ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          toastType === "success"
            ? "border-[rgba(16,185,129,0.45)] bg-[rgba(6,78,59,0.9)] text-[#ecfdf5]"
            : "border-[rgba(251,146,60,0.45)] bg-[rgba(124,45,18,0.9)] text-[#fff7ed]",
        ].join(" ")}
        aria-live="polite"
        role="status"
      >
        {toastMessage}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fafafa]">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    {...field}
                    className="border-[rgba(156,163,175,0.25)] bg-[rgba(17,24,39,0.45)] text-[#fafafa] placeholder:text-[#9ca3af]"
                  />
                </FormControl>
                <FormMessage className="text-[#fb923c]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fafafa]">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                    className="border-[rgba(156,163,175,0.25)] bg-[rgba(17,24,39,0.45)] text-[#fafafa] placeholder:text-[#9ca3af]"
                  />
                </FormControl>
                <FormMessage className="text-[#fb923c]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fafafa]">
                  Company / organization <span className="text-[#9ca3af]">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    {...field}
                    className="border-[rgba(156,163,175,0.25)] bg-[rgba(17,24,39,0.45)] text-[#fafafa] placeholder:text-[#9ca3af]"
                  />
                </FormControl>
                <FormMessage className="text-[#fb923c]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fafafa]">
                  What are you trying to fix, build, or improve?
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder="Share details about your project, goals, and blockers."
                    {...field}
                    className="border-[rgba(156,163,175,0.25)] bg-[rgba(17,24,39,0.45)] text-[#fafafa] placeholder:text-[#9ca3af] focus-visible:border-[#10b981] focus-visible:ring-[rgba(16,185,129,0.25)]"
                  />
                </FormControl>
                <FormMessage className="text-[#fb923c]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="existingUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fafafa]">
                  Existing site/app URL <span className="text-[#9ca3af]">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com"
                    {...field}
                    className="border-[rgba(156,163,175,0.25)] bg-[rgba(17,24,39,0.45)] text-[#fafafa] placeholder:text-[#9ca3af]"
                  />
                </FormControl>
                <FormMessage className="text-[#fb923c]" />
              </FormItem>
            )}
          />

          {statusMessage ? (
            <p
              className={
                statusType === "success" ? "text-sm text-[#10b981]" : "text-sm text-[#fb923c]"
              }
            >
              {statusMessage}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-[#10b981] text-[#0f172a] hover:bg-[#34d399] disabled:bg-[rgba(16,185,129,0.45)]"
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </>
  );
}
