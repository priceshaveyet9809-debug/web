import { VideoItem, PackageItem } from './types';

/**
 * EDIT THIS FILE TO CHANGE WEBSITE CONTENT
 * All image URLs, video IDs, and contact links are managed here.
 */

export const LONG_FORM_VIDEOS: VideoItem[] = [
  { id: '1', title: 'This is the symbol of luxury', thumbnail: 'https://img.youtube.com/vi/cu17V4nZK-c/hqdefault.jpg', youtubeId: 'cu17V4nZK-c', type: 'long' },
  { id: '2', title: 'Manhattan Penthouse Showcase', thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', youtubeId: 'M7J4Wj2V1Y0', type: 'long' },
  { id: '3', title: 'Malibu Beachfront Property', thumbnail: 'https://images.unsplash.com/photo-1512915922686-57c11f9ad6b3?w=800&q=80', youtubeId: 'Xg9f3X6Yy9M', type: 'long' },
  { id: '4', title: 'Modern Swiss Villa', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6191ecdb50?w=800&q=80', youtubeId: 'S1_S3aM3tQE', type: 'long' },
  { id: '5', title: '202 4 Stuart Crescent, Drummoyne', thumbnail: 'https://img.youtube.com/vi/pqL7EMhnjKg/hqdefault.jpg', youtubeId: 'pqL7EMhnjKg', type: 'long' },
];

export const SHORT_FORM_VIDEOS: VideoItem[] = [
  { id: 's1', title: 'Luxury Kitchen Reveal', thumbnail: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=700&fit=crop', youtubeId: 'ysz5S6PUM-U', type: 'short' },
  { id: 's2', title: 'Infinity Pool Sunset', thumbnail: 'https://images.unsplash.com/photo-1572331165267-854da2b00ca1?w=400&h=700&fit=crop', youtubeId: 'M7J4Wj2V1Y0', type: 'short' },
  { id: 's3', title: 'Master Bathroom Spa', thumbnail: 'https://images.unsplash.com/photo-1616594039964-40891a909d99?w=400&h=700&fit=crop', youtubeId: 'Xg9f3X6Yy9M', type: 'short' },
  { id: 's4', title: 'Grand Entryway', thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=700&fit=crop', youtubeId: 'S1_S3aM3tQE', type: 'short' },
];

export const PACKAGES: PackageItem[] = [
  {
    name: 'Essential',
    price: '$800',
    description: 'Professional precision for high-end condos and modern townhomes.',
    demoYoutubeId: 'S1_S3aM3tQE',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    features: ['4K Cinematic Edit', 'Standard Color Grading', 'Licensed Music', '48-Hour Turnaround']
  },
  {
    name: 'Premium Estate',
    price: '$1,500',
    description: 'The definitive solution for luxury villas and vacation retreats.',
    demoYoutubeId: 'M7J4Wj2V1Y0',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    highlight: true,
    features: ['2D Motion Graphics', 'Bespoke Sound Design', 'Optimized Reels/TikTok Cuts', '24-Hour Priority Delivery']
  },
  {
    name: 'Masterpiece',
    price: '$3,000+',
    description: 'Elite cinematic storytelling for multi-million dollar mansions.',
    demoYoutubeId: 'ysz5S6PUM-U',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    features: ['Cinematic HDR Grading', '3D Architectural Tracking', 'Unlimited Revisions', 'Full Media Campaign Strategy']
  }
];

export const CONTACT_INFO = {
  email: 'hello@prees-media.com',
  location: 'Los Angeles, CA',
  instagram: 'https://instagram.com/prees.media',
  facebook: 'https://facebook.com/prees.media',
  youtube: 'https://youtube.com/preesglobal',
  whatsapp: 'https://wa.me/yourlink'
};
