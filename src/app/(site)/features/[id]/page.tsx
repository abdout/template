import FeatureDetails from "@/components/marketing/features/details";

interface FeaturePageProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Feature Details",
}

export default function Feature({ params }: FeaturePageProps) {
  return <FeatureDetails params={params} />;
}