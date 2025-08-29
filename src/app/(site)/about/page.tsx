import type { Metadata } from 'next';
import AboutContent from "@/components/site/about/content";
import { generateDefaultMetadata } from '@/components/site/metadata';

export const metadata: Metadata = generateDefaultMetadata();

export default function About() {
  return (
    <div className="about-content">
      <AboutContent />
    </div>
  );
}
