"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FeatureCard = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
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
    <div className="flex justify-center mb-8">
      <div className="self-stretch h-2/3 w-2/3 relative -mt-0.5 z-10 ">
        <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
          <Image
            src={`/images/${id}.png`}
            alt="Editor preview"
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

        <div className="self-stretch flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              ✨ Features
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Discover the core tools that make Orca-q a simple yet powerful
              database editor.
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
