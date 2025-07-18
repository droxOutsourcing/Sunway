export interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export interface NoticeItem {
  id: number;
  title: string;
  date: string;
  isHighlighted?: boolean;
  content?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'embassy' | 'translation' | 'visa' | 'local';
  requirements?: string[];
  guidelines?: string[];
  cost?: string;
  isActive?: boolean;
}

export interface ContactInfo {
  phone: string;
  mobile: {
    korea: string;
    vietnam: string;
  };
  email?: string;
  address: string;
  businessHours: {
    weekdays: string;
    weekends: string;
    holidays: string;
  };
}

export interface CompanyInfo {
  name: string;
  representative: string;
  businessNumber: string;
  address: string;
  contact: ContactInfo;
}

export type PageType = 
  | 'home'
  | 'about'
  | 'services'
  | 'service02'
  | 'news'
  | 'faqs'
  | 'contact'
  | 'notice-detail';

export interface MenuItem {
  id: string;
  title: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  subItems?: MenuItem[];
}