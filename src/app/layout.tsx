import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import CustomCursorGlow from '@/components/CustomCursorGlow';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Krishna Mehta | Data Analyst & Business Intelligence Specialist',
  description:
    'Portfolio of Krishna Mehta, Data Analyst & BI Specialist proficient in Excel, SQL, Python, and Power BI. Transforming business data into actionable dashboards.',
  keywords: [
    'Krishna Mehta',
    'Data Analyst',
    'Business Intelligence',
    'Power BI Specialist',
    'SQL Analytics',
    'Python Analyst',
    'Excel Expert',
    'Manual QA',
    'KPI Dashboards'
  ],
  authors: [{ name: 'Krishna Mehta' }],
  creator: 'Krishna Mehta',
  openGraph: {
    title: 'Krishna Mehta | Data Analyst Portfolio',
    description:
      'Transforming Data Into Business Decisions. Explore Power BI dashboards, SQL analysis, and QA data solutions.',
    url: 'https://krishna-mehta.dev',
    siteName: 'Krishna Mehta Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Mehta | Data Analyst & BI Specialist',
    description:
      'Transforming Data Into Business Decisions using Excel, SQL, Python, and Power BI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Krishna Mehta',
    jobTitle: 'Data Analyst & Business Intelligence Specialist',
    knowsAbout: [
      'Data Analytics',
      'Power BI',
      'SQL',
      'Python',
      'Advanced Excel',
      'Business Intelligence',
      'Manual Quality Assurance'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Whatbytes Technologies'
    },
    sameAs: [
      'https://linkedin.com/in/krishna-mehta-analytics',
      'https://github.com/krishna-mehta'
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#0B0F19] text-[#F5F7FA] antialiased selection:bg-[#4F8CFF]/30 selection:text-white`}>
        <ScrollProgressBar />
        <BackgroundCanvas />
        <CustomCursorGlow />
        <Navbar />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
