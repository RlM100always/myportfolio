export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  technologies: string;
}

import { 
  Smartphone, 
  Code2, 
  Database, 
  Palette, 
  Share2, 
  Wrench, 
  Image, 
  Sparkles,
  Globe
} from 'lucide-react';

export const skillsData: Skill[] = [
  {
    name: 'Android Development',
    icon: Smartphone,
    color: '#2563eb',
    technologies: 'Kotlin, Java, MVVM, Jetpack Compose'
  },
  {
    name: 'Problem Solving',
    icon: Code2,
    color: '#e81c81',
    technologies: 'C, C++, Data Structures & Algorithms'
  },
  {
    name: 'Databases',
    icon: Database,
    color: '#f59e0b',
    technologies: 'Firebase, SQLite, MySQL, PostgreSQL'
  },
  {
    name: 'UI Design',
    icon: Palette,
    color: '#22c55e',
    technologies: 'XML, HTML, CSS, Jetpack Compose, Canva'
  },
  {
    name: 'Networking',
    icon: Share2,
    color: '#6d28d9',
    technologies: 'Retrofit, Volley (API Handling)'
  },
  {
    name: 'Development Tools',
    icon: Wrench,
    color: '#ff9800',
    technologies: 'Gradle, VS Code, Android Studio, Git'
  },
  {
    name: 'Image Handling',
    icon: Image,
    color: '#dc2626',
    technologies: 'Picasso, Glide Library'
  },
  {
    name: 'Animations',
    icon: Sparkles,
    color: '#3b82f6',
    technologies: 'Lottie Animations, Custom Animations'
  },
  {
    name: 'Web Development',
    icon: Globe,
    color: '#f97316',
    technologies: 'Python (Django, FastAPI, Flask)'
  }
];