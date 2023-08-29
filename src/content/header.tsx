import {
  BarChart2,
  Contact2,
  HelpCircle,
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
  { href: '/faq', label: 'FAQ', icon: HelpCircle },
];

export const AUTH_LINKS = {
  login: { href: '/auth/masuk', label: 'Masuk' },
  register: { href: '/auth/daftar', label: 'Daftar' },
  'forgot-password': { href: '/auth/lupa-sandi', label: 'Lupa Kata Sandi?' },
  'reset-password': {
    href: '/auth/reset-sandi',
    label: 'Atur Ulang Kata Sandi',
  },
};
