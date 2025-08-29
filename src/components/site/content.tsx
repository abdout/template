import { Hero } from "./hero";
import { Ready } from "./ready";
import ReadyToBuildSection from "./ready-to-build";
import Parallax from "./parallax-text";
import { FeatureCards } from "./card";
import VideoCard from "./vedio-card";
import OpenSource from "./open-source";
import Stack from "./stack";

export default function SiteContent() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <VideoCard
          logo="Dream MACHINE"
          title="AI-Powered Video Creation"
          description="Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models. Available now on iOS and the Web."
          ctaText="Try Now"
          secondaryCtaText="Get App"
          videoSrc="/sample-video.mp4"
          videoPoster="/sample-poster.jpg"
        />
      </div>
      <FeatureCards />
      <Parallax />
      <Ready />
      <ReadyToBuildSection />
      <OpenSource />
      <Stack />
    </div>
  );
}
