export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
  category: 'programming' | 'web' | 'android' | 'database' | 'other';
}

export const certificatesData: Certificate[] = [
  {
    title: 'Android Development Certification',
    issuer: 'Google Developers',
    date: 'December 2023',
    description: 'Comprehensive certification covering Android app development, Kotlin programming, and modern Android architecture patterns.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    credentialUrl: 'https://developers.google.com/certification',
    category: 'android'
  },
  {
    title: 'Python Programming Certification',
    issuer: 'Python Institute',
    date: 'September 2023',
    description: 'Advanced Python programming certification covering object-oriented programming, data structures, and web frameworks.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    credentialUrl: 'https://pythoninstitute.org',
    category: 'programming'
  },
  {
    title: 'SQL Basic',
    issuer: 'Hackerrank',
    date: '03 January 2025',
    description: 'Solve sql query problem in a limited time and get the certificate',
    image: 'https://github.com/RlM100always/Hisab/blob/main/image.png?raw=true',
    credentialUrl: 'https://www.hackerrank.com/certificates/a620aa5fee6f',
    category: 'database'
  },
  {
    title: 'Git & Version Control',
    issuer: 'GitHub',
    date: 'July 2023',
    description: 'Professional certification in Git version control, collaborative development, and GitHub workflows.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    credentialUrl: 'https://github.com/certification',
    category: 'other'
  },
  {
    title: 'React.js Development',
    issuer: 'Meta',
    date: 'June 2023',
    description: 'Advanced React.js certification covering hooks, state management, performance optimization, and modern React patterns.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    credentialUrl: 'https://developers.facebook.com/certification',
    category: 'web'
  }
];

export const certificateCategories = [
  { id: 'all', label: 'All Certificates', icon: 'Award' },
  { id: 'programming', label: 'Programming', icon: 'Code2' },
  { id: 'web', label: 'Web Development', icon: 'Globe' },
  { id: 'android', label: 'Android Development', icon: 'Smartphone' },
  { id: 'database', label: 'Database', icon: 'Database' },
  { id: 'other', label: 'Others', icon: 'BookOpen' }
] as const;