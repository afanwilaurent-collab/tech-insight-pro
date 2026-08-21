import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";

import {
  Search,
  Menu,
  X,
  ArrowRight,
  Calendar,
  Clock,
  ChevronRight,
  Shield,
  Smartphone,
  Cpu,
  Globe,
  Terminal,
  HelpCircle,
  CheckCircle2,
  Info,
  Layers,
  Zap,
} from "lucide-react";

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    bio: string;
    avatar?: string;
  };
  publishedDate: string;
  updatedDate: string;
  featuredImage: string;
  imageAlt: string;
  readingTime: string;
  seoTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  tags: string[];
  relatedArticles: string[];
  isFeatured?: boolean;
}

export type RoutePath = string;

const DOMAIN = "https://techinsightpro.com";

export const CATEGORIES = [
  {
    name: "AI & Artificial Intelligence",
    slug: "ai",
    icon: Cpu,
    description:
      "Practical applications, model breakdowns, and ethical considerations in modern AI.",
  },
  {
    name: "Smartphones & Mobile Tech",
    slug: "smartphones",
    icon: Smartphone,
    description:
      "In-depth hardware reviews, mobile OS updates, and battery optimization guides.",
  },
  {
    name: "Apps & Software",
    slug: "software",
    icon: Terminal,
    description:
      "Productivity tools, developer utilities, and software recommendations.",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    icon: Shield,
    description:
      "Digital safety practices, threat intelligence, and data privacy frameworks.",
  },
  {
    name: "Internet & Web",
    slug: "internet-web",
    icon: Globe,
    description:
      "Network standards, browser technology, and web infrastructure insights.",
  },
  {
    name: "Tech How-To Guides",
    slug: "how-to",
    icon: HelpCircle,
    description:
      "Step-by-step troubleshooting, configuration manuals, and setup guides.",
  },
  {
    name: "Gadgets & Hardware",
    slug: "gadgets",
    icon: Layers,
    description:
      "Peripherals, computing hardware, and smart device evaluations.",
  },
  {
    name: "Emerging Technology",
    slug: "emerging-technology",
    icon: Zap,
    description:
      "Early-stage innovations, quantum computing, and next-gen infrastructure.",
  },
];
