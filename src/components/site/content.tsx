import { Hero } from "./hero";
import { Ready } from "./ready";
import ReadyToBuildSection from "./ready-to-build";
import Parallax from "./parallax-text";
import { FeatureCards } from "./card";
import VideoCard from "./vedio-card";
import OpenSource from "./open-source";
import Stack from "./stack";
import FeaturedProjects from "./video/featured-video";

export default function SiteContent() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto  py-16 space-y-16">
      <VideoCard
          logo="Story TELLER"
          title="AI Story Generation"
          description="Transform your ideas into compelling stories with our advanced AI storytelling technology. Create engaging narratives, scripts, and content that captivates your audience."
          ctaText="Start Writing"
          secondaryCtaText="Learn More"
          videoSrc="/site/story.mp4"
          videoPoster="/sample-poster.jpg"
        />
        <VideoCard
          logo="Dream MACHINE"
          title="AI-Powered Video Creation"
          description="Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models. Available now on iOS and the Web."
          ctaText="Try Now"
          secondaryCtaText="Get App"
          videoSrc="/site/dream.mp4"
          videoPoster="/sample-poster.jpg"
        />
      </div>
      
      {/* Vertical Layout Video Cards */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <VideoCard
            logo="ACME"
            title="AI Story Generation"
            description="Transform your ideas into compelling stories with our advanced AI storytelling technology. Create engaging narratives, scripts, and content that captivates your audience."
            ctaText="Start Writing"
            secondaryCtaText="Learn More"
            videoSrc="/site/codebase.mp4"
            videoPoster="/sample-poster.jpg"
            className="flex-col"
          />
          <VideoCard
            logo=" CODEBASE"
            title="AI-Powered Video Creation"
            description="Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models. Available now on iOS and the Web."
            ctaText="Try Now"
            secondaryCtaText="Get App"
            videoSrc="/site/acme.mp4"
            videoPoster="/sample-poster.jpg"
            className="flex-col"
          />
          
        </div>
      </div>
      <FeaturedProjects />
      <FeatureCards />
      <Parallax />
      <Ready />
      <OpenSource />
      <Stack />
      <ReadyToBuildSection />
    </div>
  );
}
