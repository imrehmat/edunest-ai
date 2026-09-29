import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'EduNest AI - Educação em Português com Inteligência Artificial',
  description:
    'A plataforma educacional premium para estudantes em Lisboa. Professores IA personalizados, aulas interativas, currículo português alinhado ao Ministério da Educação.',
  keywords: [
    'educação portugal',
    'plataforma educacional',
    'inteligência artificial',
    'aulas online',
    'professores IA',
    'português',
    'lisboa',
    'ensino online',
  ],
  authors: [{ name: 'EduNest AI' }],
  creator: 'EduNest AI',
  publisher: 'EduNest AI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://edunest-ai.pt',
    title: 'EduNest AI - Educação em Português com IA',
    description:
      'Plataforma educacional premium com professores IA personalizados para estudantes em Lisboa.',
    images: [
      {
        url: 'https://edunest-ai.pt/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EduNest AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduNest AI - Educação em Português com IA',
    description:
      'Plataforma educacional premium com professores IA personalizados.',
    creator: '@edunest_ai',
    images: ['https://edunest-ai.pt/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-content',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Security headers via meta tags (also configured in next.config.js) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="EduNest AI" />

        {/* Lisbon-themed color */}
        <meta name="theme-color" content="#5689FF" />

        {/* SEO and social */}
        <meta property="og:locale" content="pt_PT" />
        <meta name="language" content="Portuguese" />
        <meta name="copyright" content="© 2024 EduNest AI. Todos os direitos reservados." />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'EduNest AI',
              url: 'https://edunest-ai.pt',
              logo: 'https://edunest-ai.pt/logo.png',
              description:
                'Plataforma educacional premium com professores IA personalizados em português.',
              areaServed: 'PT',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'support@edunest-ai.pt',
              },
            }),
          }}
        />
      </head>

      <body className="bg-white text-slate-900">
        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Google Analytics (when configured) */}
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} /> */}

        {/* Service Worker registration for offline support (future) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator && typeof window !== 'undefined') {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {
                    // Service worker registration failed, but app still works
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
