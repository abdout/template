import type { Metadata } from 'next';

export function generateDefaultMetadata(): Metadata {
  return {
    title: 'About Us',
    description: 'Learn more about our mission to provide quality education and innovative learning solutions.',
    openGraph: {
      title: 'About Us',
      description: 'Learn more about our mission to provide quality education and innovative learning solutions.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us',
      description: 'Learn more about our mission to provide quality education and innovative learning solutions.',
    },
  };
}

export function generateBlogMetadata(title?: string, description?: string): Metadata {
  return {
    title: title || 'Blog',
    description: description || 'Read our latest articles, tutorials, and insights about education and technology.',
    openGraph: {
      title: title || 'Blog',
      description: description || 'Read our latest articles, tutorials, and insights about education and technology.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'Blog',
      description: description || 'Read our latest articles, tutorials, and insights about education and technology.',
    },
  };
}

export function generateFeaturesMetadata(title?: string, description?: string): Metadata {
  return {
    title: title || 'Features',
    description: description || 'Explore our comprehensive set of features designed to enhance your learning experience.',
    openGraph: {
      title: title || 'Features',
      description: description || 'Explore our comprehensive set of features designed to enhance your learning experience.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'Features',
      description: description || 'Explore our comprehensive set of features designed to enhance your learning experience.',
    },
  };
}

export function generatePricingMetadata(title?: string, description?: string): Metadata {
  return {
    title: title || 'Pricing',
    description: description || 'Choose the perfect plan for your needs with our transparent and competitive pricing.',
    openGraph: {
      title: title || 'Pricing',
      description: description || 'Choose the perfect plan for your needs with our transparent and competitive pricing.',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || 'Pricing',
      description: description || 'Choose the perfect plan for your needs with our transparent and competitive pricing.',
    },
  };
}
