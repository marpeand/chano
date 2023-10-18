import '@/styles/globals.css'
import '@/styles/prism.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { ThemeProviders } from './providers'

import CONFIG from '@/blog.config'
import GoogleAnalytics from '@/components/GoogleAnalytics'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL(CONFIG.url),
    title: {
        default: CONFIG.title,
        template: `%s | ${CONFIG.title}`,
    },
    description: CONFIG.siteDescription,
    openGraph: {
        title: CONFIG.title,
        description: CONFIG.siteDescription,
        url: CONFIG.url,
        locale: CONFIG.lang,
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html className={inter.className} lang={CONFIG.lang} suppressHydrationWarning>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
            <body className="bg-light transition-colors duration-200 dark:bg-dark">
                <ThemeProviders>
                    {CONFIG.useGoogleAnalytics && (
                        <GoogleAnalytics googleAnalyticsId={CONFIG.GoogleAnalyticsCode} />
                    )}
                    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-6">
                        <Header />
                        <main className="mt-9 flex w-[90%] grow flex-col items-center md:w-full lg:w-5/6 xl:w-3/6">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProviders>
            </body>
        </html>
    )
}
