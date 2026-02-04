
// Import React to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface VideoItem {
  id: string;
  thumbnail: string;
  title: string;
  youtubeId: string; // The ID part of a youtube url
  type: 'long' | 'short';
}

export interface PackageItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  demoYoutubeId: string;
  image?: string; // New property for package showcase image
  highlight?: boolean;
}

export interface MediaChannel {
  name: string;
  description: string;
  subscribers: string;
  link: string;
  logo: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  // Use React.ReactNode for components/icons; requires 'import React' in scope
  icon: React.ReactNode;
  image?: string;
  beforeImage?: string;
  afterImage?: string;
  videoUrl?: string;
  type: 'standard' | 'comparison' | 'video';
}
