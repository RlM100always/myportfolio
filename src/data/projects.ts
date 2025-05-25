export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
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
    liveLink: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.educationalbooks',
    githubLink: 'https://github.com/RlM100always/UPBH-Unlimited-Pdf-Book-House'
  },
  {
    title: 'GlobalUniGuide',
    shortDescription: 'Educational App',
    description: 'An educational app providing detailed university information, courses, dictionaries, and exam results.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20142943.png?raw=true',
    technologies: ['Android', 'Java', 'SQLite', 'Retrofit'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.alluniversityinformation',
    githubLink: 'https://github.com/RlM100always/GlobalUniGuide'
  },
  {
    title: 'SelfMe: Earning & Marketing App',
    shortDescription: 'Monetization Platform',
    description: 'An earning & marketing app where users can promote websites and earn by playing games.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143909.png?raw=true',
    technologies: ['Android', 'Java', 'Firebase', 'AdMob'],
    liveLink: 'https://drive.google.com/file/d/1l129EV-qURme2lS3GFmh675KM0KxHlaa/view',
    githubLink: 'https://github.com/RlM100always/EarningApp'
  },
  {
    title: 'BD University Information',
    shortDescription: 'Educational Platform',
    description: 'A platform providing all information about universities in Bangladesh.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20143949.png?raw=true',
    technologies: ['Android', 'Java', 'Firebase', 'Retrofit'],
    liveLink: 'https://www.youtube.com/watch?v=zgWeWTUwv4U',
    githubLink: 'https://github.com/RlM100always/Current-UniversityBD'
  },
  {
    title: 'District Service',
    shortDescription: 'Information App',
    description: 'An Android app providing detailed information about all districts in Bangladesh.',
    image: 'https://github.com/RlM100always/Hisab/blob/main/img/Screenshot%202025-02-17%20144043.png?raw=true',
    technologies: ['Android', 'Java', 'SQLite', 'Google Maps'],
    liveLink: 'https://www.youtube.com/watch?v=Wt0VJZ8Yy14',
    githubLink: 'https://github.com/RlM100always/District-Service-App'
  }
];