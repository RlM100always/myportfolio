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
}

export const achievementsData: Achievement[] = [
  {
    title: 'GitHub Trophy Holder',
    icon: Trophy,
    iconColor: '#facc15'
  },
  {
    title: 'Open Source Contributor',
    icon: GitFork,
    iconColor: '#38bdf8'
  },
  {
    title: 'CS Student at DU',
    icon: GraduationCap,
    iconColor: '#34d399'
  },
  {
    title: 'Problem Solver',
    icon: LineChart,
    iconColor: '#f87171'
  },
  {
    title: 'Professional Android Developer',
    icon: Smartphone,
    iconColor: '#facc15'
  },
  {
    title: 'Python Full-Stack Developer',
    icon: Server,
    iconColor: '#f87171'
  },
  {
    title: 'Published Android Apps',
    icon: Upload,
    iconColor: '#34d399'
  }
];