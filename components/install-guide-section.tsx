"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Terminal,
  Container,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { appUrl } from "@/constants";

interface InstallMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: "link" | "copy";
  actionText: string;
  command?: string;
  href?: string;
  delay: number;
}

const InstallMethod = ({
  icon,
  title,
  description,
  action,
  actionText,
  command,
  href,
  delay,
}: InstallMethodProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (command) {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex flex-col h-full p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 cursor-pointer transition-all duration-300"
    >
      {/* Background */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:bg-white/[0.02]"
        style={{
          background: "rgba(15, 18, 17, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-white/95 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Command Display */}
        {command && (
          <div className="mb-4 p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-sm text-white/80 overflow-x-auto">
            <code>{command}</code>
          </div>
        )}

        {/* Action Button */}
        {action === "link" && href ? (
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-300">
              <ExternalLink className="w-4 h-4" />
              {actionText}
            </button>
          </Link>
        ) : (
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-300"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {actionText}
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export function InstallGuideSection() {
  const methods: InstallMethodProps[] = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Open in Browser",
      description:
        "Start instantly without any installation. Access Orca-q directly from your browser and connect to your databases right away.",
      action: "link",
      actionText: "Launch App",
      href: appUrl,
      delay: 0,
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Run with NPX",
      description:
        "Run locally with a single command. No global installation required - just run and start managing your databases.",
      action: "copy",
      actionText: "Copy Command",
      command: "npx orcaq",
      delay: 0.1,
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: "Use Docker",
      description:
        "Deploy with Docker for isolated, reproducible environments. Perfect for teams and production setups.",
      action: "copy",
      actionText: "Copy Command",
      command: "docker run -p 3000:3000 cinny09/orca-q",
      delay: 0.2,
    },
  ];

  return (
    <section
      id="install-guide-section"
      className="w-full px-4 flex flex-col justify-center items-center overflow-visible bg-transparent"
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-center gap-12">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-5 z-10">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30" />
            <span className="text-white/50 text-sm font-medium uppercase tracking-widest">
              Get Started
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30" />
          </div>
          <h2 className="w-full max-w-[655px] text-center text-foreground text-3xl md:text-5xl font-semibold leading-tight">
            Quick Setup
          </h2>
          <p className="w-full max-w-[500px] text-center text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
            Choose your preferred way to get started with Orca-q
          </p>
        </div>

        {/* Methods Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
          {methods.map((method, index) => (
            <InstallMethod key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
}
