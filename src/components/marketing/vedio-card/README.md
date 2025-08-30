# VideoCard Component

A responsive two-column layout component that displays text content on the left (40%) and an autoplay video area on the right (60%), inspired by the Dream MACHINE design.

## Features

- **Responsive Design**: Stacks vertically on mobile, horizontal layout on larger screens
- **Two-Column Layout**: 40% text content, 60% video area
- **Dark Mode Support**: Automatically adapts to light/dark themes
- **Autoplay Video**: Video starts playing immediately and loops continuously
- **No Video Controls**: Clean, seamless video experience without UI elements
- **Default Video Source**: Uses "/site/dream.mp4" by default
- **Clean Video Area**: No UI overlays or icons for a minimalist look
- **Rounded Design**: Outer container has rounded corners while internal elements remain sharp
- **Customizable**: Accepts custom content, styling, and video sources

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `logo` | `string` | Yes | The main logo text (will be split into two parts) |
| `title` | `string` | Yes | The main title of the card |
| `description` | `string` | Yes | Detailed description text |
| `ctaText` | `string` | Yes | Primary call-to-action button text |
| `secondaryCtaText` | `string` | Yes | Secondary button text |
| `videoSrc` | `string` | No | Video source URL (defaults to "/site/dream.mp4") |
| `videoPoster` | `string` | No | Video poster image URL |
| `className` | `string` | No | Additional CSS classes |

## Usage

### Basic Example (Uses Default Video)

```tsx
import VideoCard from "@/components/site/vedio-card";

<VideoCard
  logo="Dream MACHINE"
  title="AI-Powered Video Creation"
  description="Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models."
  ctaText="Try Now"
  secondaryCtaText="Get App"
/>
```

### With Custom Video Source

```tsx
<VideoCard
  logo="Creative Studio"
  title="Professional Video Editing"
  description="Transform your ideas into stunning visual content with our advanced AI-powered editing tools."
  ctaText="Start Creating"
  secondaryCtaText="Learn More"
  videoSrc="/custom-video.mp4"
/>
```

### With Custom Styling

```tsx
<VideoCard
  logo="Video Hub"
  title="Streaming Platform"
  description="Discover, watch, and share amazing videos from creators around the world."
  ctaText="Join Now"
  secondaryCtaText="Browse Videos"
  className="max-w-6xl mx-auto shadow-2xl"
/>
```

## Design Features

### Left Section (40%)
- Logo display with serif and sans-serif font combination
- Descriptive text with proper typography
- Two call-to-action buttons (primary and secondary)
- Light gray background with sharp corners

### Right Section (60%)
- Autoplay video that loops continuously
- No video controls displayed (play, pause, fullscreen, volume)
- Clean, minimalist design without UI overlays
- Dark background for video content
- Default video source: "/site/dream.mp4"

### Video Behavior
- **Autoplay**: Video starts playing immediately when component loads
- **Loop**: Video continuously loops for seamless background content
- **Muted**: Video plays without sound (required for autoplay in most browsers)
- **No Controls**: Clean interface without any video player buttons
- **Seamless**: Video loops without interruption for continuous visual appeal

### Container Design
- **Outer Container**: Rounded corners (`rounded-3xl`) for a modern, soft appearance
- **Internal Elements**: Sharp corners and edges for clean, professional look
- **Responsive**: Maintains proportions across all screen sizes

### Responsive Behavior
- **Mobile**: Stacks vertically with full-width sections
- **Desktop**: Side-by-side layout with 40%/60% split
- **Tablet**: Adaptive layout that maintains proportions

## Styling

The component uses Tailwind CSS classes and follows the project's design system:
- Uses shadcn/ui components (Button, Card)
- Supports dark mode through CSS variables
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Consistent spacing and typography scales
- Rounded outer container with sharp internal elements

## Accessibility

- Semantic HTML structure
- Proper ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for text readability
- Screen reader friendly content structure
- Video autoplay respects user preferences

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Video element support for video playback
- CSS border-radius support for rounded corners
- Autoplay support (may be blocked by browser settings)

## Demo

Visit `/features/video-card-demo` to see the component in action with different configurations.
