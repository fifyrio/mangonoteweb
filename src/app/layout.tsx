import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { GA_TRACKING_ID } from '@/lib/gtag'
import { GTM_ID } from '@/lib/gtm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mango AI Note - Master Everything with AI-Powered Learning',
  description: 'Convert audio and PDFs into notes, mind maps, quizzes, and flashcards in one click. Cross-platform sync and AI-powered learning tools.',
  keywords: ['AI learning', 'note taking', 'mind maps', 'flashcards', 'PDF converter', 'audio transcription'],
  authors: [{ name: 'Mango AI Note Team' }],
  metadataBase: new URL('https://www.mangonote.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mango AI Note - Master Everything with AI-Powered Learning',
    description: 'Convert audio and PDFs into notes, mind maps, quizzes, and flashcards in one click.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mango AI Note',
    description: 'AI-powered learning tools for students and professionals.',
  },
  robots: 'index, follow',
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className={inter.className}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  )
}