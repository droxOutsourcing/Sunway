import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SUNWAY - 베트남 대사관 업무 대행 전문',
    template: '%s | SUNWAY',
  },
  description: '베트남 대사관 업무 대행, 번역·인증 서비스, 베트남 현지 서비스를 제공하는 전문 업체입니다.',
  keywords: ['베트남', '대사관', '업무대행', '번역', '인증', '비자', '유학', '썬웨이', 'SUNWAY'],
  authors: [{ name: 'SUNWAY' }],
  creator: 'SUNWAY',
  publisher: 'SUNWAY',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sunway.co.kr'),
  alternates: {
    canonical: '/',
    languages: {
      'ko-KR': '/ko',
      'vi-VN': '/vi',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://sunway.co.kr',
    title: 'SUNWAY - 베트남 대사관 업무 대행 전문',
    description: '베트남 대사관 업무 대행, 번역·인증 서비스, 베트남 현지 서비스를 제공하는 전문 업체입니다.',
    siteName: 'SUNWAY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUNWAY - 베트남 대사관 업무 대행 전문',
    description: '베트남 대사관 업무 대행, 번역·인증 서비스, 베트남 현지 서비스를 제공하는 전문 업체입니다.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}