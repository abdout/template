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
          description="Transform your ideas into compelling stories with our talented storytelling team. Create engaging narratives, scripts, and content that captivates your audience."
          ctaText="Start Writing"
          secondaryCtaText="Learn More"
          videoSrc="/site/story.mp4"
          videoPoster="/sample-poster.jpg"
        />
        <VideoCard
          logo="Dream MACHINE"
          title="AI-Powered Video Creation"
          description="Bring your ideas to life — ideate, visualize, and design unique themes with ease. Share your dreams with the world using our intuitive wizard."
          ctaText="Try Now"
          secondaryCtaText="Get Expert"
          videoSrc="/site/dream.mp4"
          videoPoster="/sample-poster.jpg"
        />
      </div>
      
      {/* Vertical Layout Video Cards */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <VideoCard
            logo="CODEBASE"
            title="AI Story Generation"
            description="Automate the boring. at Databayt we're building codebase for business automation."
            ctaText="Databayt"
            secondaryCtaText="Codebase"
            videoSrc="/site/codebase.mp4"
            videoPoster="/sample-poster.jpg"
            className="flex-col"
          />
          <VideoCard
            logo=" ACME"
            title="AI-Powered Video Creation"
            description="Company automation. managing projects, auto-generate reports, calculations, and docs"
            ctaText="Live Preview"
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
