"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Search, Terminal, Network } from "lucide-react";

const featureIcons: Record<string, React.ReactNode> = {
  "workspace-based-management": <Briefcase className="w-6 h-6" />,
  "simple-query": <Search className="w-6 h-6" />,
  "raw-query-with-variables": <Terminal className="w-6 h-6" />,
  "erd-made-simple": <Network className="w-6 h-6" />,
};

const FeatureCard = ({
  id,
  title,
  description,
  index,
}: {
  id: string;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="group w-full max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 flex flex-col justify-start items-start relative cursor-pointer transition-all duration-300"
  >
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:bg-white/[0.03]"
      style={{
        background: "rgba(15, 18, 17, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    />
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Gradient accent line at top */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    <div className="self-stretch p-8 md:p-10 flex flex-col justify-start items-start gap-4 relative z-10">
      {/* Header with number and icon */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-white/30 text-sm font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
          {featureIcons[id]}
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight group-hover:text-white/95 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>

    {/* Image Preview */}
    <div className="flex justify-center w-full pb-8 md:pb-10 px-8 md:px-10">
      <div className="w-full max-w-4xl relative">
        <div className="bg-primary-light/30 rounded-2xl p-2 shadow-2xl group-hover:bg-primary-light/40 transition-all duration-300">
          <Image
            src={`/images/${id}.png`}
            alt={`${title} preview`}
            width={1160}
            height={700}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export function SectionedFeatures() {
  const features = [
    {
      id: "workspace-based-management",
      title: "Workspace-Based Management",
      description:
        "Organize your projects with ease. Each workspace can hold multiple database connections, helping you keep environments and projects neatly separated.",
    },
    {
      id: "simple-query",
      title: "Simple Query",
      description:
        "Interact with your tables through an intuitive UI. Browse, filter, and edit data directly without needing to write SQL, designed for smooth and user-friendly workflows.",
    },
    {
      id: "raw-query-with-variables",
      title: "Raw Query with Variables",
      description:
        "For power users who love SQL. Write raw queries and insert variables on the fly, giving you flexibility and full control when working with complex data.",
    },
    {
      id: "erd-made-simple",
      title: "ERD Made Simple",
      description:
        "Visualize your database instantly. Generate a clear and powerful Entity Relationship Diagram (ERD) to understand and design your schema structure with ease.",
    },
  ];

  return (
    <section
      id="features-section"
      className="w-full px-4 flex flex-col justify-center items-center overflow-visible bg-transparent"
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-16">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />

        <div className="self-stretch flex flex-col justify-center items-center gap-4 z-10">
          <div className="flex flex-col justify-start items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30" />
              <span className="text-white/50 text-sm font-medium uppercase tracking-widest">
                Features
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30" />
            </div>
            <h2 className="w-full max-w-[655px] text-center text-foreground text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Everything you need
              <br />
              <span className="text-white/60">to manage your database</span>
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
              Discover the core tools that make Orca-q a simple yet powerful
              database editor for developers and teams.
            </p>
          </div>
        </div>

        <div className="self-stretch flex flex-col gap-12 md:gap-16 z-10">
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
              <FeatureCard {...feature} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
