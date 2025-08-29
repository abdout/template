"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, ExternalLink, Star } from "lucide-react";
import Link from "next/link";

interface FeatureDetailsProps {
  params: Promise<{ id: string }>;
}

const featureData = {
  id: "1",
  title: "Advanced Analytics",
  description: "Get deep insights into your data with our comprehensive analytics dashboard that provides real-time metrics, customizable reports, and predictive analytics.",
  category: "Analytics",
  priority: "high",
  status: "available",
  icon: "📊",
  longDescription: `
    Our Advanced Analytics feature provides enterprise-grade insights into your data. 
    With real-time processing, customizable dashboards, and machine learning-powered 
    predictions, you'll have everything you need to make data-driven decisions.
    
    Key capabilities include:
    • Real-time data processing and visualization
    • Custom dashboard creation with drag-and-drop interface
    • Advanced filtering and segmentation options
    • Export capabilities in multiple formats (PDF, CSV, Excel)
    • Scheduled report generation and distribution
    • Integration with popular BI tools
  `,
  benefits: [
    "Make faster, more informed decisions",
    "Identify trends and patterns in your data",
    "Optimize business processes",
    "Improve customer satisfaction",
    "Increase operational efficiency"
  ],
  technicalSpecs: {
    "Data Processing": "Real-time with <100ms latency",
    "Storage": "Unlimited with automatic archiving",
    "API Rate Limits": "10,000 requests per minute",
    "Export Formats": "PDF, CSV, Excel, JSON",
    "Integrations": "Slack, Email, Webhook support"
  }
};

export default function FeatureDetails({ params }: FeatureDetailsProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/features" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Features
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">{featureData.icon}</span>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                  {featureData.title}
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  {featureData.description}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="secondary">{featureData.category}</Badge>
              <Badge className="bg-red-100 text-red-800">
                {featureData.priority} priority
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                {featureData.status}
              </Badge>
              {featureData.priority === "high" && (
                <Badge className="bg-yellow-100 text-yellow-800">
                  <Star className="mr-1 h-3 w-3 fill-current" />
                  Featured
                </Badge>
              )}
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-line">
                {featureData.longDescription}
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {featureData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(featureData.technicalSpecs).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>
                Start using this feature today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg">
                Try Feature
              </Button>
              <Button variant="outline" className="w-full">
                View Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full">
                Contact Sales
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Related Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/features/2" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">Real-time Collaboration</div>
                  <div className="text-sm text-gray-600">Work together with your team</div>
                </Link>
                <Link href="/features/3" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">AI-Powered Insights</div>
                  <div className="text-sm text-gray-600">Leverage AI for better decisions</div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
