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
    title: 'UPBH: Unlimited Pdf BookHouse',
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
    githubLink: 'https://github.com/RlM100always/GlobalUniGuide/tree/master',
    videoLink:'https://youtu.be/mBkyaR6TuFQ?si=cs9US03fGRLr9Din'
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
    videoLink : 'https://youtu.be/cVpFwrftsUw?si=qwqTFr1aXgqcWJXh'
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
    title: 'The Major Mario Games',
    shortDescription: 'Client Major Mario Game Project',
    description: 'Creating a Super Mario Bros-style game with Clara, where she collects leaves while avoiding and interacting with ghosts.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/Screenshot%202025-06-07%20211941.png?raw=true',
    technologies: ['Java Programmig','Claraworld'],
    category: 'game',
    githubLink: 'https://github.com/RlM100always/clara-game',
    videoLink :'https://youtu.be/PbrEfD0cK4o'
  },
  {
    title: 'Book Store Management System',
    shortDescription: 'Python Based CLI Application',
    description: 'This is a Python-based Command Line Interface (CLI) application that allows users to easily manage a virtual bookstore',
    image: 'https://github.com/RlM100always/Book-Management-Store-CLI/raw/main/img/Screenshot%202025-03-05%20225953.png',
    technologies: ['Python','Vscode','Console Programming'],
    category: 'others',
    githubLink: 'https://github.com/RlM100always/Book-Management-Store-CLI',
    videoLink :'https://drive.google.com/file/d/1XxRek4U4LUmk5wDt-0Gp_T9BoETawhvb/view?usp=sharing'
  },
   {
    title: 'Daily Notes Application',
    shortDescription: 'Notes App with various features , Easy to use',
    description: 'Organize your thoughts effortlessly with DailyNotes - Easy Notepad, a simple yet powerful note-taking app designed to enhance productivity and streamline your everyday tasks.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/dailynotes/image.png?raw=true',
    technologies: ['Kotlin','Vscode','Room Database','Android Studio','XML'],
    category: 'android',
    githubLink: 'https://github.com/RlM100always/dailynotesapp',
    liveLink :'https://play.google.com/store/apps/details?id=com.techtravelcoder.dailynote&pcampaignid=web_share',
    videoLink : 'https://youtu.be/tYXb6lUb0FE?si=5Qu4K4BqqjT2X86y'
  },
  {
    title: 'Group Chatting with File Sharing',
    shortDescription: 'Group Chatting Application ,Handle Multiple Clients Simultaneously',
    description: 'A network-based communication system that enables multiple clients to exchange real-time text messages and share files through a central server',
    image: 'https://github.com/RlM100always/Hisab/blob/main/groupchat/Screenshot%202025-07-17%20193038.png?raw=true',
    technologies: ['Python','Vscode','Tkinter','Socket Programming'],
    category: 'others',
    githubLink: 'https://github.com/RlM100always/CSE-3111-Computer-Networking',
    videoLink :'https://youtu.be/Imi7Hd67Nqo?si=-SXDimI1-9kPs_pX'
  },
  {
    title: 'Job Portal Site',
    shortDescription: 'Django-based job portal web application that connects employers with job seekers.',
    description: 'A comprehensive Django-based job portal web application that connects employers with job seekers. This application allows employers to post jobs and applicants to search and apply for positions.',
    image: 'https://github.com/RlM100always/Hisab/raw/main/job_portal/Screenshot%202025-07-26%20170901.png?raw=true',
    technologies: ['Python','Vscode','Django','Render Deployment','HTML','CSS'],
    category: 'web',
    liveLink: 'https://job-portal-4-pxqx.onrender.com/',
    githubLink: 'https://github.com/RlM100always/job-portal',
    videoLink :'https://youtu.be/26VGrxBneRw?si=H1NuZbTu_RfCbswe'
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