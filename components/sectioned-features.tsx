"use client";

import { motion } from "framer-motion";
import AiCodeReviews from "./bento/ai-code-reviews";
import RealtimeCodingPreviews from "./bento/real-time-previews";
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration";
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration";
import EasyDeployment from "./bento/easy-deployment";
import ParallelCodingAgents from "./bento/parallel-agents";

const FeatureCard = ({
  title,
  description,
  Component,
}: {
  title: string;
  description: string;
  Component: React.FC;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative"
  >
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(15, 18, 17, 0.8)", // Using darker background for better contrast
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />

    <div className="self-stretch p-8 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-white text-xl font-normal leading-7">
          {title} <br />
          <span className="text-gray-300">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-80 relative -mt-0.5 z-10">
      <Component />
    </div>
  </motion.div>
);

export function SectionedFeatures() {
  const features = [
    {
      id: "ai-code-reviews",
      title: "AI-powered code reviews",
      description: "Get real-time, smart suggestions for cleaner code.",
      Component: AiCodeReviews,
    },
    {
      id: "parallel-agents",
      title: "Launch parallel coding agents",
      description: "Solve complex problems faster with multiple AI agents.",
      Component: ParallelCodingAgents,
    },
    {
      id: "real-time-previews",
      title: "Real-time coding previews",
      description: "Chat, collaborate, and instantly preview changes together.",
      Component: RealtimeCodingPreviews,
    },
    {
      id: "mcp-connectivity",
      title: "Flexible MCP connectivity",
      description: "Effortlessly manage and configure MCP server access.",
      Component: MCPConnectivityIllustration,
    },
    {
      id: "one-click-integrations",
      title: "One-click integrations",
      description: "Easily connect your workflow with popular dev tools.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      id: "easy-deployment",
      title: "Deployment made easy",
      description: "Go from code to live deployment on Vercel instantly.",
      Component: EasyDeployment,
    },
  ];

  return (
    <section
      id="features-section"
      className="w-full px-4 flex flex-col justify-center items-center overflow-visible bg-transparent"
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-16">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />

        <div className="self-stretch flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Empower Your Workflow with AI
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Ask your AI Agent for real-time collaboration, seamless
              integrations, and actionable insights to streamline your
              operations.
            </p>
          </div>
        </div>

        <div className="self-stretch flex flex-col gap-20 z-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              id={`feature-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="w-full flex flex-col gap-8"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
