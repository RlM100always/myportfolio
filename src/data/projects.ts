export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'android' | 'game' | 'client' | 'others';
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: Project[] = [
  {
    title: 'UPBH: Unlimited Pdf Book House',
    shortDescription: 'eBook Library Application',
    description: 'A versatile eBook Library Application with thousands of books across multiple categories.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143749.png?raw=true',
    technologies: ['Android', 'Java', 'Firebase', 'Room DB'],
    category: 'android',
    liveLink: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.educationalbooks',
    githubLink: 'https://github.com/RlM100always/UPBH-Unlimited-Pdf-Book-House'
  },
  {
    title: 'GlobalUniGuide',
    shortDescription: 'Educational App',
    description: 'An educational app providing detailed university information, courses, dictionaries, and exam results.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20142943.png?raw=true',
    technologies: ['Android', 'Java', 'SQLite', 'Retrofit'],
    category: 'android',
    liveLink: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.alluniversityinformation',
    githubLink: 'https://github.com/RlM100always/GlobalUniGuide'
  },
  {
    title: 'SelfMe: Earning & Marketing App',
    shortDescription: 'Monetization Platform',
    description: 'An earning & marketing app where users can promote websites and earn by playing games.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143909.png?raw=true',
    technologies: ['Android', 'Java', 'Firebase', 'AdMob'],
    category: 'game',
    liveLink: 'https://drive.google.com/file/d/1l129EV-qURme2lS3GFmh675KM0KxHlaa/view',
    githubLink: 'https://github.com/RlM100always/EarningApp'
  },
  {
    title: 'BD University Information',
    shortDescription: 'Educational Platform',
    description: 'A platform providing all information about universities in Bangladesh.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143949.png?raw=true',
    technologies: ['Android', 'Java', 'Firebase', 'Retrofit'],
    category: 'android',
    liveLink: 'https://www.youtube.com/watch?v=zgWeWTUwv4U',
    githubLink: 'https://github.com/RlM100always/Current-UniversityBD'
  },
  {
    title: 'District Service',
    shortDescription: 'Information App',
    description: 'An Android app providing detailed information about all districts in Bangladesh.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20144043.png?raw=true',
    technologies: ['Android', 'Java', 'SQLite', 'Google Maps'],
    category: 'android',
    liveLink: 'https://www.youtube.com/watch?v=Wt0VJZ8Yy14',
    githubLink: 'https://github.com/RlM100always/District-Service-App'
  },
  // Add some example web development projects
  {
    title: 'E-Commerce Dashboard',
    shortDescription: 'Admin Dashboard',
    description: 'A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    category: 'web',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example'
  },
  {
    title: 'Portfolio Website',
    shortDescription: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing development skills and projects.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'web',
    githubLink: 'https://github.com/example'
  },
  // Add some client projects
  {
    title: 'Restaurant Management System',
    shortDescription: 'Client Project',
    description: 'A complete restaurant management system built for a local restaurant chain.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Django', 'PostgreSQL', 'Bootstrap', 'jQuery'],
    category: 'client',
    liveLink: 'https://example-restaurant.com'
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
  { id: 'web', label: 'Web Development', icon: 'Globe' },
  { id: 'android', label: 'Android Development', icon: 'Smartphone' },
  { id: 'game', label: 'Game Development', icon: 'Gamepad2' },
  { id: 'client', label: 'Client Projects', icon: 'Users' },
  { id: 'others', label: 'Others', icon: 'FolderOpen' }
] as const;