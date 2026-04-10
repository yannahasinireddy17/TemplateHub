import type { Category, Template } from '../types';

export const categories: Category[] = [
  { id: 'social-media', title: 'SOCIAL MEDIA', color: 'bg-[#ccffcc]', textColor: 'text-[#195a19]' },
  { id: 'professional', title: 'PROFESSIONAL', color: 'bg-[#e0e0ff]', textColor: 'text-[#19195a]' },
  { id: 'business', title: 'BUSINESS', color: 'bg-[#fff0c0]', textColor: 'text-[#6a4210]' },
  { id: 'productivity', title: 'PRODUCTIVITY', color: 'bg-[#ffe0e0]', textColor: 'text-[#5a1919]' },
];

export const templates: Template[] = [
  // Social Media
  { id: 'sm1', title: 'Instagram post', subtitle: 'Square · 1080x1080', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80' },
  { id: 'sm2', title: 'Story template', subtitle: 'Vertical · 9:16', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1516259762381-8c4d8ce72d4c?w=500&q=80' },
  { id: 'sm3', title: 'Reels cover', subtitle: 'Cover thumbnail', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?w=500&q=80' },
  { id: 'sm4', title: 'Carousel slide', subtitle: '10-slide deck', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&q=80' },
  { id: 'sm5', title: 'LinkedIn banner', subtitle: '1584x396', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&q=80' },
  { id: 'sm6', title: 'Twitter/X card', subtitle: 'Quote card', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&q=80' },
  { id: 'sm7', title: 'YouTube thumbnail', subtitle: '1280x720', categoryId: 'social-media', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80' },

  // Professional
  { id: 'pr1', title: 'Resume — minimal', subtitle: 'Single page', categoryId: 'professional', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80' },
  { id: 'pr2', title: 'Cover letter', subtitle: 'Formal format', categoryId: 'professional', image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=500&q=80' },
  { id: 'pr3', title: 'Portfolio layout', subtitle: 'Case study page', categoryId: 'professional', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80' },
  { id: 'pr4', title: 'LinkedIn summary', subtitle: 'Bio · 300 words', categoryId: 'professional', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500&q=80' },

  // Business
  { id: 'bu1', title: 'Invoice', subtitle: 'Freelancer billing', categoryId: 'business', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80' },
  { id: 'bu2', title: 'Project proposal', subtitle: 'Client pitch', categoryId: 'business', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80' },
  { id: 'bu3', title: 'Quotation', subtitle: 'Price estimate', categoryId: 'business', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=500&q=80' },
  { id: 'bu4', title: 'Client brief', subtitle: 'Onboarding doc', categoryId: 'business', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&q=80' },
  { id: 'bu5', title: 'Meeting agenda', subtitle: 'Team standup', categoryId: 'business', image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&q=80' },
  { id: 'bu6', title: 'Brand kit sheet', subtitle: 'Style guide', categoryId: 'business', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&q=80' },

  // Productivity
  { id: 'pd1', title: 'Weekly planner', subtitle: 'Mon - Sun view', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80' },
  { id: 'pd2', title: 'Daily to-do', subtitle: 'Priority list', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fd36f?w=500&q=80' },
  { id: 'pd3', title: 'Study schedule', subtitle: 'Exam prep', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80' },
  { id: 'pd4', title: 'Habit tracker', subtitle: '30-day grid', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&q=80' },
  { id: 'pd5', title: 'Goal planner', subtitle: 'Quarterly OKRs', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80' },
  { id: 'pd6', title: 'Budget tracker', subtitle: 'Monthly finance', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80' },
  { id: 'pd7', title: 'Project timeline', subtitle: 'Gantt chart', categoryId: 'productivity', image: 'https://images.unsplash.com/photo-1507925922837-32b72a39edc5?w=500&q=80' },
];
