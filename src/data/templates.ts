import type { Category, Template } from '../types';

export const categories: Category[] = [
  { id: 'social-media', title: 'SOCIAL MEDIA', color: 'bg-[#ccffcc]', textColor: 'text-[#195a19]' },
  { id: 'professional', title: 'PROFESSIONAL', color: 'bg-[#e0e0ff]', textColor: 'text-[#19195a]' },
  { id: 'business', title: 'BUSINESS', color: 'bg-[#fff0c0]', textColor: 'text-[#6a4210]' },
  { id: 'productivity', title: 'PRODUCTIVITY', color: 'bg-[#ffe0e0]', textColor: 'text-[#5a1919]' },
];

export const templates: Template[] = [
  // Social Media
  { id: 'sm1', title: 'Instagram post', subtitle: 'Square · 1080x1080', categoryId: 'social-media' },
  { id: 'sm2', title: 'Story template', subtitle: 'Vertical · 9:16', categoryId: 'social-media' },
  { id: 'sm3', title: 'Reels cover', subtitle: 'Cover thumbnail', categoryId: 'social-media' },
  { id: 'sm4', title: 'Carousel slide', subtitle: '10-slide deck', categoryId: 'social-media' },
  { id: 'sm5', title: 'LinkedIn banner', subtitle: '1584x396', categoryId: 'social-media' },
  { id: 'sm6', title: 'Twitter/X card', subtitle: 'Quote card', categoryId: 'social-media' },
  { id: 'sm7', title: 'YouTube thumbnail', subtitle: '1280x720', categoryId: 'social-media' },

  // Professional
  { id: 'pr1', title: 'Resume — minimal', subtitle: 'Single page', categoryId: 'professional' },
  { id: 'pr2', title: 'Cover letter', subtitle: 'Formal format', categoryId: 'professional' },
  { id: 'pr3', title: 'Portfolio layout', subtitle: 'Case study page', categoryId: 'professional' },
  { id: 'pr4', title: 'LinkedIn summary', subtitle: 'Bio · 300 words', categoryId: 'professional' },

  // Business
  { id: 'bu1', title: 'Invoice', subtitle: 'Freelancer billing', categoryId: 'business' },
  { id: 'bu2', title: 'Project proposal', subtitle: 'Client pitch', categoryId: 'business' },
  { id: 'bu3', title: 'Quotation', subtitle: 'Price estimate', categoryId: 'business' },
  { id: 'bu4', title: 'Client brief', subtitle: 'Onboarding doc', categoryId: 'business' },
  { id: 'bu5', title: 'Meeting agenda', subtitle: 'Team standup', categoryId: 'business' },
  { id: 'bu6', title: 'Brand kit sheet', subtitle: 'Style guide', categoryId: 'business' },

  // Productivity
  { id: 'pd1', title: 'Weekly planner', subtitle: 'Mon - Sun view', categoryId: 'productivity' },
  { id: 'pd2', title: 'Daily to-do', subtitle: 'Priority list', categoryId: 'productivity' },
  { id: 'pd3', title: 'Study schedule', subtitle: 'Exam prep', categoryId: 'productivity' },
  { id: 'pd4', title: 'Habit tracker', subtitle: '30-day grid', categoryId: 'productivity' },
  { id: 'pd5', title: 'Goal planner', subtitle: 'Quarterly OKRs', categoryId: 'productivity' },
  { id: 'pd6', title: 'Budget tracker', subtitle: 'Monthly finance', categoryId: 'productivity' },
  { id: 'pd7', title: 'Project timeline', subtitle: 'Gantt chart', categoryId: 'productivity' },
];
