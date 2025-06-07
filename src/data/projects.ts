export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'android' | 'game' | 'client' | 'others';
  liveLink?: string;
  githubLink?: string;
  videoLink?:string;
}

export const projectsData: Project[] = [
  {
    title: 'UPBH: Unlimited Pdf Book House',
    shortDescription: 'eBook Library Application',
    description: 'A versatile eBook Library Application with thousands of books across multiple categories with bookmarks,light/dark mode, horizontal and vertical capability features',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143749.png?raw=true',
    technologies: ['Sqlite', 'Java', 'Firebase', 'Shared Preferences','XML','Glide','Onesignal'],
    category: 'android',
    liveLink: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.educationalbooks',
    githubLink: 'https://github.com/RlM100always/UPBH-Unlimited-Pdf-Book-House',
    videoLink:'https://youtu.be/6gyHrhE9dfY?si=-A2nU_bJ5F652Rw_'
  },
  {
    title: 'GlobalUniGuide:Study materials',
    shortDescription: 'Educational App',
    description: 'An educational app and proper study guidelines app which provides university information, courses, dictionaries, exam , notes and many more features',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20142943.png?raw=true',
    technologies: ['Android Studio', 'Java', 'SQLite', 'XML','Retrofit','FCM','Blogger API','ML Kit Firebase'],
    category: 'android',
    liveLink: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.alluniversityinformation',
    githubLink: 'https://github.com/RlM100always/GlobalUniGuide',
    videoLink:'https://youtu.be/aCxr5WBagJ8'
  },
  {
    title: 'SelfMe: Earning & Marketing App',
    shortDescription: 'Online Earning and Ads marketing Apps',
    description: 'An earning & marketing app where users can promote websites and earn by playing games.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143909.png?raw=true',
    technologies: ['Android Studio', 'Java', 'Firebase Realtime Database','One Signal'],
    category: 'android',
    liveLink: 'https://drive.google.com/file/d/1l129EV-qURme2lS3GFmh675KM0KxHlaa/view',
    githubLink: 'https://github.com/RlM100always/EarningApp',
    videoLink : 'https://youtu.be/4vCbUB3MeTA?si=aS7J14v4Ht4H1hl0'
  },
  {
    title: 'BD University Information',
    shortDescription: 'Educational Platform About Bangladeshi Universities ',
    description: 'A platform providing all information about universities in Bangladesh.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143949.png?raw=true',
    technologies: ['Android Studio', 'Java', 'Firebase Real Time Database', 'Retrofit','Sqlite'],
    category: 'android',
    liveLink: 'https://www.youtube.com/watch?v=zgWeWTUwv4U',
    githubLink: 'https://github.com/RlM100always/Current-UniversityBD',
    videoLink:'https://youtu.be/zgWeWTUwv4U?si=g7Py1Ke9ZaMAVxA1',
  },
  {
    title: 'District Service',
    shortDescription: 'Information App',
    description: 'An Android app providing detailed information about all districts in Bangladesh.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20144043.png?raw=true',
    technologies: ['Android Sudio', 'Java', 'SQLite', 'Google Maps'],
    category: 'android',
    liveLink: 'https://www.youtube.com/watch?v=Wt0VJZ8Yy14',
    githubLink: 'https://github.com/RlM100always/District-Service-App',
    videoLink:'https://youtu.be/Wt0VJZ8Yy14?si=6NiSG1M23Ba1psMM'
  },
  // Add some example web development projects
  {
    title: 'Experience ULURU',
    shortDescription: 'Discover the spiritual heart of Australia at Uluru',
    description: 'Uluru tourism website offers seamless trip planning with interactive maps, booking systems, and cultural insights. Discover stunning photo galleries, virtual tours, and local guides while accessing essential visitor information ',
    image:'https://github.com/RlM100always/Hisab/blob/main/uluru/Screenshot%202025-06-06%20230616.png?raw=true',
    technologies: ['Html','CSS','Javascript'],
    category: 'web',
    liveLink: '',
    githubLink: 'https://github.com/RlM100always/Experience-ULURU',
    videoLink:'https://youtu.be/z1hpc-6EO-A'

  },
  {
    title: 'Mango Care',
    shortDescription: 'Explore diseases and symptoms of Mango',
    description: 'Mango Care is a Django-based multi-page informational website focusing on pests and diseases affecting mangoes. The site includes a home page, a list of pests/diseases with brief descriptions and images, detailed pages for each pest/disease, and an about page with team member details.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/mango-care/Screenshot%202025-06-06%20235304.png?raw=true',
    technologies: ['Django', 'HTML', 'CSS', 'Python'],
    category: 'web',
    githubLink: 'https://github.com/RlM100always/Mango-Care',
    videoLink : 'https://youtu.be/rn5W-ddp0EE'
  },
  // Add some client projects
  {
    title: 'The Major Mario Game',
    shortDescription: 'Client Major Mario Game Project',
    description: 'Creating a Super Mario Bros-style game with Clara, where she collects leaves while avoiding and interacting with ghosts.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20211941.png?raw=true',
    technologies: ['Java Programmig','Claraworld'],
    category: 'game',
    githubLink: 'https://github.com/RlM100always/clara-game',
    videoLink :'https://youtu.be/PbrEfD0cK4o'
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