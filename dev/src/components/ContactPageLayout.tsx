"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { Github, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";

interface ContactPageLayoutProps {
  children: ReactNode;
}

export function ContactPageLayout({ children }: ContactPageLayoutProps) {
  const pathname = usePathname();

  const activeSection =
    pathname === "/services"
      ? "services"
      : pathname === "/contact"
        ? "contact"
        : "home";

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-12 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Header/Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pb-12">
            <div className="space-y-6">
              {/* Intro */}
              <div className="space-y-5">
                <Link href="/" className="inline-block">
                  <h1 className="text-4xl font-bold text-[#fafafa] leading-none sm:text-5xl">
                    Jason James Moore
                  </h1>
                </Link>
                <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Systems-focused full-stack developer
                </h2>
                <p className="max-w-xs text-[#9ca3af] leading-normal">
                  I <b className="text-[#fafafa]">build, extend, and stabilize</b> software around real-world workflows.
                </p>
              </div>

              {/* Navigation - In-page jump links */}
              <nav className="hidden lg:block space-y-1 pt-4">
                <Link
                  href="/"
                  className={`group flex items-start gap-2 py-2.5 transition-all duration-300 ${
                    activeSection === "home"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "home" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "home"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    Home
                  </span>
                </Link>

                <Link
                  href="/services"
                  className={`group flex items-start gap-2 py-2.5 transition-all duration-300 ${
                    activeSection === "services"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "services" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "services"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    Services
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className={`group flex items-start gap-2 py-2.5 transition-all duration-300 ${
                    activeSection === "contact"
                      ? "pl-4 text-[#10b981] font-bold"
                      : "pl-0 text-[#9ca3af] hover:pl-2 hover:text-[#fafafa]"
                  }`}
                >
                  <span
                    className={`text-xs text-[#fb923c] transition-opacity duration-300 ${
                      activeSection === "contact"
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    ▹
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-all duration-300 ${
                      activeSection === "contact"
                        ? "scale-105"
                        : "scale-100 group-hover:scale-102"
                    } inline-block`}
                  >
                    Contact
                  </span>
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-12 lg:mt-0">
              <Link
                href="https://github.com/jasonjamesmoore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#9ca3af] hover:text-[#10b981] transition"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/jason-james-moore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#9ca3af] hover:text-[#10b981] transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="lg:w-[52%] pt-12 md:pt-20 lg:py-24">{children}</main>
        </div>
      </div>
    </div>
  );
}
