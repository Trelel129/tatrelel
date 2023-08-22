import {
  BarChart2,
  Contact2,
  Home,
  LucideIcon,
  MessageCircle,
  Users2,
} from 'lucide-react';
import { IconType } from 'react-icons';

export const LINKS: {
  href: string;
  label: string;
  icon: IconType | LucideIcon;
}[] = [
  { href: '/', label: 'Beranda', icon: Home },
  { href: '/fitur', label: 'Fitur', icon: BarChart2 },
  { href: '/ulasan', label: 'Ulasan', icon: MessageCircle },
  { href: '/kontak', label: 'Kontak', icon: Contact2 },
  { href: '/tentang', label: 'Tentang Kami', icon: Users2 },
];
