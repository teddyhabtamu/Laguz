
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface StatItem {
  name: string;
  value: number;
}
