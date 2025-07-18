'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Service02 from '@/components/Service02';
import News from '@/components/News';
import NoticeDetail from '@/components/NoticeDetail';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Index from '@/components/Index';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    // Handle notice detail pages
    if (currentPage.startsWith('notice-detail-')) {
      const noticeId = parseInt(currentPage.replace('notice-detail-', ''));
      return (
        <NoticeDetail
          currentPage="news"
          onNavigate={handleNavigate}
          noticeId={noticeId}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <Index currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'about':
        return <About currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'services':
        return <Services currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'service02':
        return <Service02 currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'news':
        return <News currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'faqs':
        return <FAQs currentPage={currentPage} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact currentPage={currentPage} onNavigate={handleNavigate} />;
      default:
        return <Index currentPage={currentPage} onNavigate={handleNavigate} />;
    }
  };

  return <main className="min-h-screen">{renderPage()}</main>;
}