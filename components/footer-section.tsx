"use client";

import { Github } from "lucide-react";
import { githubUrl } from "@/constants";

export function FooterSection() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Download", href: "#download" },
        { label: "Try Web Version", href: "#try-web" },
        { label: "Roadmap", href: "#roadmap" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "API Reference", href: "#api" },
        { label: "Community", href: "#community" },
        { label: "Support", href: "#support" },
        { label: "Terms of Use", href: "#terms" },
      ],
    },
  ];

  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">
            Orca-q
          </div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
          The open source - Generator database editor
        </p>
        <div className="flex justify-start items-start gap-3">
          <a
            href={githubUrl}
            target="_blank"
            aria-label="GitHub"
            className="w-4 h-4 flex items-center justify-center"
          >
            <Github className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Product, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        {footerLinks.map((section) => (
          <div
            key={section.title}
            className="flex flex-col justify-start items-start gap-3"
          >
            <h3 className="text-muted-foreground text-md font-medium leading-5">
              {section.title}
            </h3>
            <div className="flex flex-col justify-center items-start gap-2">
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-sm font-normal leading-5 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
