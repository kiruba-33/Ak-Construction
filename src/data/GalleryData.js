// src/data/GalleryData.js
export const imagesData = [
  { 
    id: 'hero',
    url: '/assets/gallery/hero-project.jpg', 
    blueprint: '/assets/gallery/hero-blueprint.jpg',
    alt: 'Premium Architectural Design',
    title: 'Modern Luxury Home',
    category: 'Architecture',
    span: 'col-span-12 row-span-2' 
  },
  { id: 1, url: '/assets/gallery/image1.jpg', blueprint: '/assets/gallery/image1-bp.jpg', title: 'Grand Villa Entrance', category: 'Construction', span: 'col-span-8' },
  { id: 2, url: '/assets/gallery/image2.jpg', blueprint: '/assets/gallery/image2-bp.jpg', title: 'Elegant Interior Space', category: 'Interior', span: 'col-span-4' },
  { id: 3, url: '/assets/gallery/image3.jpg', blueprint: '/assets/gallery/image3-bp.jpg', title: 'Resort-Style Living', category: 'Landscape', span: 'col-span-4' },
  { id: 4, url: '/assets/gallery/image4.jpg', blueprint: '/assets/gallery/image4-bp.jpg', title: 'Urban Development', category: 'Architecture', span: 'col-span-8' },
];

export const processSteps = [
  { title: "Planning", desc: "Digital Blueprints & 3D Design", icon: "📐" },
  { title: "Foundation", desc: "Strong Base for Your Dreams", icon: "🏗️" },
  { title: "Finishing", desc: "Premium Interiors & Aesthetics", icon: "✨" }
];