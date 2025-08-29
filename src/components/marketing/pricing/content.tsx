"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDescription: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaVariant: "default" | "outline" | "secondary";
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small teams and individuals",
    price: "$9",
    priceDescription: "per month",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "10GB storage",
      "Email support",
      "Basic integrations"
    ],
    cta: "Get Started",
    ctaVariant: "outline"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Ideal for growing businesses",
    price: "$29",
    priceDescription: "per month",
    features: [
      "Up to 25 team members",
      "Advanced analytics",
      "100GB storage",
      "Priority support",
      "Advanced integrations",
      "Custom branding",
      "API access"
    ],
    popular: true,
    cta: "Start Free Trial",
    ctaVariant: "default"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    priceDescription: "contact sales",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "White-label solution",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary"
  }
];

export default function PricingContent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the plan that&apos;s right for you. All plans include our core features 
          and you can upgrade or downgrade at any time.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {pricingTiers.map((tier) => (
          <Card 
            key={tier.id} 
            className={`relative transition-all hover:shadow-lg ${
              tier.popular ? 'ring-2 ring-blue-600 scale-105' : ''
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-3 py-1">
                  <Star className="mr-1 h-3 w-3 fill-current" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription className="text-gray-600">
                {tier.description}
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                <span className="text-gray-600 ml-2">
                  {tier.priceDescription}
                </span>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={tier.ctaVariant}
                size="lg"
              >
                {tier.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Need a custom plan?</CardTitle>
            <CardDescription>
              We can create a custom solution that fits your specific requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                Contact our sales team to discuss your needs and get a personalized quote.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline">
                  Schedule a Call
                </Button>
                <Button>
                  Get Custom Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
