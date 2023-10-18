'use client'
import { theme } from '@/blog.config'
import { ThemeProvider } from 'next-themes'
export function ThemeProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme={theme}
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}
