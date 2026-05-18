"use client";

import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import SectionDoodle from "@/components/SectionDoodle";

const mshot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const PROJECTS = [
  {
    title: "Cashia",
    description:
      "A fintech platform focused on simplifying digital financial services and payment experiences. Built with a focus on performance, scalability, and user trust — helping individuals and businesses move money with confidence.",
    tags: ["Fintech", "Payments", "Next.js", "TypeScript"],
    url: "https://www.cashia.com/",
    color: "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
    screenshot: mshot("https://www.cashia.com/"),
  },
  {
    title: "Duka2",
    description:
      "An e-commerce and business management platform helping Kenyan merchants manage online stores, streamline operations, and grow their digital presence. Designed for simplicity without sacrificing power.",
    tags: ["E-Commerce", "SaaS", "Business Tools", "React"],
    url: "https://duka2.co.ke/",
    color: "linear-gradient(135deg, #065f46 0%, #10b981 50%, #34d399 100%)",
    screenshot: mshot("https://duka2.co.ke/"),
  },
  {
    title: "Cashia Developer Docs",
    description:
      "A developer documentation portal for Cashia's integrations, APIs, authentication flows, and fintech onboarding. Built to make the developer experience delightful — clear, fast, and searchable.",
    tags: ["Docs", "API", "Developer Experience", "MDX"],
    url: "https://developer.cashia.com/docs",
    color: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)",
    screenshot: mshot("https://developer.cashia.com/docs"),
  },
  {
    title: "Cashia Customer Portal",
    description:
      "Customer-facing dashboard for managing accounts, transactions, and financial interactions. Designed with seamless user experience in mind — fast, accessible, and trustworthy at every touchpoint.",
    tags: ["Dashboard", "UX", "Fintech", "React"],
    url: "https://customer.cashia.com/",
    color: "linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #fb923c 100%)",
    screenshot: mshot("https://customer.cashia.com/"),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <SectionDoodle variant="projects" />
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Featured Work"
          title="Projects I'm proud of"
          subtitle="Real products used by real people — from payment platforms to developer tools."
        />

        <div className="space-y-20 mt-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} screenshot={project.screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
}
