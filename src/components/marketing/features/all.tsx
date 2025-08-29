"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: "high" | "medium" | "low";
  status: "available" | "coming-soon" | "beta";
  icon: string;
}

const features: Feature[] = [
  {
    id: "1",
    title: "Advanced Analytics",
    description: "Get deep insights into your data with our comprehensive analytics dashboard.",
    category: "Analytics",
    priority: "high",
    status: "available",
    icon: "📊"
  },
  {
    id: "2",
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time with live updates and comments.",
    category: "Collaboration",
    priority: "high",
    status: "available",
    icon: "👥"
  },
  {
    id: "3",
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to get actionable insights from your data.",
    category: "AI",
    priority: "medium",
    status: "beta",
    icon: "🤖"
  },
  {
    id: "4",
    title: "Advanced Security",
    description: "Enterprise-grade security with multi-factor authentication and encryption.",
    category: "Security",
    priority: "high",
    status: "available",
    icon: "🔒"
  },
  {
    id: "5",
    title: "Mobile App",
    description: "Access your data on the go with our native mobile applications.",
    category: "Mobile",
    priority: "medium",
    status: "coming-soon",
    icon: "📱"
  },
  {
    id: "6",
    title: "API Integration",
    description: "Connect with your favorite tools through our comprehensive API.",
    category: "Integration",
    priority: "medium",
    status: "available",
    icon: "🔗"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "available":
      return "bg-green-100 text-green-800";
    case "coming-soon":
      return "bg-blue-100 text-blue-800";
    case "beta":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function AllFeatures() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          All Features
        </h1>
        <p className="text-lg text-gray-600">
          Discover everything our platform has to offer
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
          All Categories
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
          Analytics
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
          Collaboration
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
          AI
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
          Security
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.id} className="group hover:shadow-lg transition-all">
            <CardHeader className="pb-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-3xl">{feature.icon}</span>
                {feature.priority === "high" && (
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                )}
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
              <CardDescription className="text-gray-600">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  {feature.category}
                </Badge>
                <Badge className={`text-xs ${getPriorityColor(feature.priority)}`}>
                  {feature.priority} priority
                </Badge>
                <Badge className={`text-xs ${getStatusColor(feature.status)}`}>
                  {feature.status}
                </Badge>
              </div>
              <Button 
                className="w-full group-hover:bg-gray-900 transition-colors" 
                variant="outline"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
