import { 
  Trophy,
  GitFork,
  GraduationCap,
  LineChart,
  Smartphone,
  Server,
  Upload
} from 'lucide-react';

export interface Achievement {
  title: string;
  icon: React.ReactNode;
  iconColor: string;
  description?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export const achievementsData: Achievement[] = [
  {
    title: 'GitHub Trophy Holder',
    icon: Trophy,
    iconColor: '#facc15',
    description: 'Recognized for outstanding contributions to open source projects',
    links: [
      {
        label: 'View GitHub Profile',
        url: 'https://github.com/RlM100always'
      }
    ]
  },
  {
    title: 'Open Source Contributor',
    icon: GitFork,
    iconColor: '#38bdf8',
    description: 'Active contributor to various open source projects and repositories',
    links: [
      {
        label: 'GitHub Contributions',
        url: 'https://github.com/RlM100always'
      }
    ]
  },
  {
    title: 'CS Student at DU',
    icon: GraduationCap,
    iconColor: '#34d399',
    description: 'Currently pursuing B.Sc. in Computer Science and Engineering at University of Dhaka',
    links: [
      {
        label: 'University Profile',
        url: 'https://github.com/RlM100always/Hisab/blob/main/image.png?raw=true'
      }
    ]
  },
  {
    title: 'Problem Solver',
    icon: LineChart,
    iconColor: '#f87171',
    description: 'Skilled in algorithmic problem solving and competitive programming',
    links: [
      {
        label: 'HackerRank Profile',
        url: 'https://www.hackerrank.com/profile/rakib100rlms'
      }
    ]
  },
  {
    title: 'Professional Android Developer',
    icon: Smartphone,
    iconColor: '#facc15',
    description: 'Experienced in developing and publishing Android applications',
    links: [
      {
        label: 'Play Store Apps',
        url: 'https://play.google.com/store/apps/developer?id=TechTravelCoder'
      }
    ]
  },
  {
    title: 'Python Full-Stack Developer',
    icon: Server,
    iconColor: '#f87171',
    description: 'Proficient in full-stack web development using Python frameworks',
    links: [
      {
        label: 'Portfolio Projects',
        url: 'https://github.com/RlM100always'
      }
    ]
  },
  {
    title: 'Published Android Apps',
    icon: Upload,
    iconColor: '#34d399',
    description: 'Successfully published multiple Android applications on Google Play Store',
    links: [
      {
        label: 'UPBH App',
        url: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.educationalbooks'
      },
      {
        label: 'GlobalUniGuide App',
        url: 'https://play.google.com/store/apps/details?id=com.techtravelcoder.alluniversityinformation'
      }
    ]
  }
];