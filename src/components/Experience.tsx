"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket, Star, Mountain, FlaskConical, LayoutDashboard } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SectionDoodle from "@/components/SectionDoodle";

const events = [
  {
    year: "2026",
    icon: Star,
    title: "Full-Stack Engineer",
    company: "Cashia",
    description:
      "Leading development of the customer portal, payment infrastructure, and developer API. Shipping features used by thousands of merchants across East Africa in an Agile team — two-week sprints, constant iteration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Agile", "Scrum"],
    highlight: true,
  },
  {
    year: "2026",
    icon: Rocket,
    title: "Launched Duka2",
    company: "Side Project → Product",
    description:
      "Designed and built Duka2 from scratch an e-commerce platform for Kenyan SMEs. From idea to first paying customer in 3 months.",
    tags: ["React", "Node.js", "Stripe", "Firebase"],
    highlight: false,
  },
  {
    year: "2024",
    icon: LayoutDashboard,
    title: "Product Manager",
    description:
      "Wore the PM hat during a critical growth phase defining the roadmap, writing specs, running sprint planning, and bridging engineering with business stakeholders. Shipped three major feature sets on schedule.",
    tags: ["Product Strategy", "Roadmap", "Agile", "Stakeholder Management", "Scrum"],
    highlight: false,
  },
  {
    year: "2023",
    icon: FlaskConical,
    title: "QA Engineer",
    description:
      "Owned quality across web and mobile building test plans, writing automated regression suites, and embedding QA into the CI/CD pipeline. Reduced production defects by catching issues pre-merge.",
    tags: ["QA", "Test Automation", "CI/CD", "Regression", "Agile"],
    highlight: false,
  },
  {
    year: "2022",
    icon: Briefcase,
    title: "Full-Stack Engineer",
    company: "Fintech Startup",
    description:
      "Built and maintained payment integration APIs, internal dashboards, and onboarding flows. First time working at fintech scale.",
    tags: ["React", "Express", "PostgreSQL"],
    highlight: false,
  },
  {
    year: "2021",
    icon: Briefcase,
    title: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Crafted pixel-perfect UIs for clients across healthcare, e-commerce, and SaaS verticals. Learned the value of design systems the hard way.",
    tags: ["React", "Tailwind CSS", "Figma", "MaterialUI"],
    highlight: false,
  },
  {
    year: "Always",
    icon: Mountain,
    title: "In the mountains",
    company: "The Aberdares · Mt. Kenya · Chasing Waterfalls · Forest Trails",
    description:
      "When the terminal goes quiet, the boots come out. Hiking and camping in the Kenyan highlands is where I reset, think clearly, and remember why I build things worth stepping away from.",
    tags: ["Hiking", "Camping", "Outdoors", "Walks", "No Slack 😂"],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 bg-[var(--card)]/40 overflow-hidden">
      <SectionDoodle variant="experience" />
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Experience"
          title="My journey so far"
          subtitle="From junior developer to fintech engineer — here's how I got here."
        />

        <div className="relative mt-4">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[var(--card-border)]" />

          <div className="space-y-8">
            {events.map((event, i) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={`${event.title}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative flex gap-6 sm:gap-8"
                >

                  <div
                    className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border-2 ${
                      event.highlight
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-lg shadow-blue-500/20"
                        : "bg-[var(--card)] border-[var(--card-border)] text-[var(--muted)]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <motion.div
                    whileHover={{ x: 2 }}
                    className={`flex-1 pb-8 ${i < events.length - 1 ? "border-b border-[var(--card-border)]" : ""}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] text-base">
                          {event.title}
                        </h3>
                        <span className="text-sm text-[var(--accent)] font-medium">
                          {event.company}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-[var(--muted)] bg-[var(--card)] border border-[var(--card-border)] px-2.5 py-1 rounded-full mt-0.5">
                        {event.year}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-md bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
