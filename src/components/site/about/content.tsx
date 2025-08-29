import { StickyScroll } from "@/components/atom/sticky-scroll";

export default function AboutContent() {
  // Static content about the platform
  return (
    <div>
      <StickyScroll content={aboutContent} />
    </div>
  );
}

const aboutContent = [
  {
    title: "Our Platform",
    description:
      "A comprehensive platform designed to provide innovative solutions for modern businesses and organizations. Our platform offers cutting-edge features and tools to help you succeed in today's digital landscape.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/site/h.jpeg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="Platform overview"
        />
      </div>
    ),
  },
  {
    title: "Core Features",
    description:
      "Discover our powerful suite of features designed to streamline your workflow, enhance productivity, and drive growth. From automation to analytics, we provide everything you need to succeed.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/site/trian.jpeg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="Core features showcase"
        />
      </div>
    ),
  },
  {
    title: "Innovation First",
    description:
      "We believe in pushing the boundaries of what's possible. Our platform combines cutting-edge technology with user-friendly design to deliver solutions that are both powerful and accessible.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-destructive to-primary">
        <img
          src="/site/a.jpeg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="Innovation showcase"
        />
      </div>
    ),
  },
  {
    title: "Advanced Technology",
    description:
      "Built with the latest technologies and best practices, our platform ensures reliability, security, and performance. We continuously update and improve our systems to meet evolving needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-muted">
        <img
          src="/site/b.jpeg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="Technology showcase"
        />
      </div>
    ),
  },
  {
    title: "Community & Support",
    description:
      "Join our growing community of users and developers. We provide comprehensive support, documentation, and resources to help you make the most of our platform and achieve your goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-accent">
        <img
          src="/contribute/h.jpeg"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="Community and support"
        />
      </div>
    ),
  },
];

