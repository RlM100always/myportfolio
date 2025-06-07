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
    issuer: 'MSB Academy',
    date: 'November 2023',
    description: 'Comprehensive certification covering Android app development, Java programming, and OOP , Database.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20205114.png?raw=true',
    credentialUrl: 'https://drive.google.com/file/d/1T_iNzXmhxUA62uBcrJ6v73UOtGt4ReSE/view',
    category: 'android'
  },
  {
    title: 'ICPC Priliminary Contest',
    issuer: 'ACM ICPC',
    date: 'September 2022',
    description:'Participated in the ACM ICPC preliminary contest , solving algorithmic and DSA problems under time constraints',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20204732.png?raw=true',
    credentialUrl: 'https://drive.google.com/file/d/1-v71yXX1Ug3CzU2h-K4BOsZS77qNCLDi/view',
    category: 'programming'
  },
  {
    title: 'SQL Basic',
    issuer: 'Hackerrank',
    date: '03 January 2025',
    description: 'Solve sql query problem in a limited time and get the certificate',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20063409.png?raw=true',
    credentialUrl: 'https://www.hackerrank.com/certificates/a620aa5fee6f',
    category: 'database'
  },
  {
    title: 'Python (Basic) Certificate',
    issuer: 'Ostad',
    date: 'March 2025',
    description: 'Learn the basic fundamentals of Python Programming',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20210144.png?raw=true',
    credentialUrl: 'https://drive.google.com/file/d/1slEg1DVVXSwevdoAXEH5vH8pKnHhtPYJ/view',
    category: 'programming'//web others
  },
  {
    title: 'JavaScript (Basic) Certificate',
    issuer: 'Ostad',
    date: 'April 2025',
    description: 'Learn the fundamentals of Javascript Programming',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20210045.png?raw=true',
    credentialUrl: 'https://drive.google.com/file/d/1jHRM8wTHbB4sJIIVPGMoOvR7EOJtVSu8/view',
    category: 'programming'
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