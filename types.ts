export interface Service {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface VideoData {
  id: string;
  title: string;
  videoId: string;
}

export interface ModelComparison {
  feature: string;
  modelA: string; // e.g., Traditional
  modelB: string; // e.g., Alumimec Custom
}