import VideoCard from "@/components/site/vedio-card";

export const metadata = {
  title: "Video Card Demo",
  description: "Demo of the VideoCard component with different configurations"
}

export default function VideoCardDemo() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Video Card Component Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A responsive two-column layout with text content (40%) and autoplay video area (60%)
          </p>
        </div>

        {/* Main Demo */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Main Demo - Dream MACHINE (Default Video)
          </h2>
          <VideoCard
            logo="Dream MACHINE"
            title="AI-Powered Video Creation"
            description="Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models. Available now on iOS and the Web."
            ctaText="Try Now"
            secondaryCtaText="Get App"
          />
        </div>

        {/* Custom Video Demo */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Custom Video Demo - Creative Studio
          </h2>
          <VideoCard
            logo="Creative Studio"
            title="Professional Video Editing"
            description="Transform your ideas into stunning visual content with our advanced AI-powered editing tools. Perfect for creators, marketers, and professionals."
            ctaText="Start Creating"
            secondaryCtaText="Learn More"
            videoSrc="/site/dream.mp4"
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Different Video Demo */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Different Video Source
          </h2>
          <VideoCard
            logo="Video Hub"
            title="Streaming Platform"
            description="Discover, watch, and share amazing videos from creators around the world. Join our community of video enthusiasts today."
            ctaText="Join Now"
            secondaryCtaText="Browse Videos"
            videoSrc="/site/dream.mp4"
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Usage Instructions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Usage Instructions
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              <strong>Props:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><code>logo</code> - The main logo text (will be split into two parts)</li>
              <li><code>title</code> - The main title of the card</li>
              <li><code>description</code> - Detailed description text</li>
              <li><code>ctaText</code> - Primary call-to-action button text</li>
              <li><code>secondaryCtaText</code> - Secondary button text</li>
              <li><code>videoSrc</code> - Optional video source URL (defaults to &quot;/site/dream.mp4&quot;)</li>
              <li><code>videoPoster</code> - Optional video poster image</li>
              <li><code>className</code> - Optional additional CSS classes</li>
            </ul>
            
            <p className="mt-6">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responsive design that stacks on mobile</li>
              <li>40% text content, 60% video area layout</li>
              <li>Dark mode support</li>
              <li>Video autoplays and loops by default</li>
              <li>No video controls displayed (clean, seamless experience)</li>
              <li>Clean video area without UI overlays</li>
              <li>Rounded outer corners with sharp internal elements</li>
              <li>Follows shadcn design patterns and naming conventions</li>
            </ul>

            <p className="mt-6">
              <strong>Video Behavior:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Autoplay: Video starts playing immediately when component loads</li>
              <li>Loop: Video continuously loops for seamless background content</li>
              <li>Muted: Video plays without sound (required for autoplay in most browsers)</li>
              <li>No Controls: Clean interface without play/pause/fullscreen buttons</li>
              <li>Default Source: Uses &quot;/site/dream.mp4&quot; if no videoSrc is provided</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
