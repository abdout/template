"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    description: "Learn how to build modern web applications with the latest features of Next.js 15.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    id: "2",
    title: "Building Scalable APIs with Prisma",
    description: "Discover best practices for building robust and scalable APIs using Prisma ORM.",
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
  },
  {
    id: "3",
    title: "Modern CSS Techniques for 2024",
    description: "Explore the latest CSS features and techniques to create stunning user interfaces.",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  },
  {
    id: "4",
    title: "Authentication Best Practices",
    description: "Learn about secure authentication patterns and implementation strategies.",
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
  }
];

export default function BlogContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600">
          Insights, tutorials, and updates from our team
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="mb-2">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
              <CardDescription className="line-clamp-3 text-sm text-gray-600">
                {post.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
