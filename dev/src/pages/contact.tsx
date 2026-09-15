import { AppLayout } from "@/components/AppLayout";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Briefcase, Code2 } from "lucide-react";

export default function Contact() {
  return (
    <AppLayout>
      <section className="max-w-2xl space-y-16">
          {/* Intro */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#fafafa]">Let's Talk</h1>
            <p className="text-lg text-[#9ca3af] leading-relaxed">
              Whether you’re hiring for a team or need help with software that’s broken, unfinished, too manual, or ready for the next step, I’d be glad to hear from you.
            </p>
          </div>

          {/* What I'm Looking For */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 p-6 border border-[rgba(156,163,175,0.2)] rounded-lg hover:border-[rgba(16,185,129,0.3)] hover:bg-[rgba(16,185,129,0.02)] transition-all">
              <div className="flex items-center gap-3">
                <Briefcase className="text-[#10b981]" size={20} />
                <h3 className="text-lg font-medium text-[#fafafa]">Full-Time Roles</h3>
              </div>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Interested in software engineering, product engineering, and support engineering roles where I can work on real systems, solve ambiguous problems, and contribute across the stack.
              </p>
            </div>

            <div className="space-y-3 p-6 border border-[rgba(156,163,175,0.2)] rounded-lg hover:border-[rgba(16,185,129,0.3)] hover:bg-[rgba(16,185,129,0.02)] transition-all">
              <div className="flex items-center gap-3">
                <Code2 className="text-[#10b981]" size={20} />
                <h3 className="text-lg font-medium text-[#fafafa]">Contract Projects</h3>
              </div>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                Available for focused fixes, inherited applications, feature work, integrations, operational tools, troubleshooting, and larger custom software projects.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-[rgba(156,163,175,0.1)] pt-16 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-[#10b981]" size={20} />
                <h2 className="text-2xl font-bold text-[#fafafa]">Get in Touch</h2>
              </div>
              <p className="text-[#9ca3af]">
                Send a quick note and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="rounded-lg border border-[rgba(156,163,175,0.2)] bg-[rgba(17,24,39,0.3)] p-6 md:p-8">
              <ContactForm />
            </div>

            <a 
              href="mailto:contact@jasonjamesmoore.com" 
              className="inline-flex items-center gap-2 text-lg text-[#10b981] hover:text-[#fafafa] transition-colors group"
            >
              <span>contact@jasonjamesmoore.com</span>
              <span className="text-[#fb923c] transition-transform group-hover:translate-x-1">→</span>
            </a>

            {/* Social Links */}
            <div className="pt-8 space-y-3">
              <p className="text-sm text-[#9ca3af]">Or connect with me on:</p>
              <div className="flex gap-6">
                <a 
                  href="https://github.com/jasonjamesmoore" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#9ca3af] hover:text-[#10b981] transition-colors text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/jason-james-moore" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#9ca3af] hover:text-[#10b981] transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
    </AppLayout>
  );
}
