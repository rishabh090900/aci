import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
  url = '',
  type = 'website'
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acibansur.com';
  const fullUrl = `${siteUrl}${url}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Ayush Career Institute' }],
    creator: 'ACI Bansur',
    publisher: 'Ayush Career Institute',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'en_IN',
      url: fullUrl,
      title,
      description,
      siteName: 'Ayush Career Institute',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@acibansur',
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
      google: 'your-google-verification-code', // Add actual code from Google Search Console
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Ayush Career Institute',
    alternateName: 'ACI Bansur',
    url: 'https://acibansur.com',
    logo: 'https://acibansur.com/images/logo.png',
    description: 'Best NEET & IIT-JEE Coaching Institute in Bansur, Rajasthan',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hansora Road Bypass, Kotputli Road',
      addressLocality: 'Bansur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9783925501',
      contactType: 'Admissions',
      availableLanguage: ['Hindi', 'English'],
    },
    sameAs: [
      'https://facebook.com/acibansur',
      'https://instagram.com/acibansur',
      'https://youtube.com/@acibansur',
    ],
  };
}

export function generateCourseSchema(courseName: string, courseDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: courseDescription,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Ayush Career Institute',
      sameAs: 'https://acibansur.com',
    },
  };
}
