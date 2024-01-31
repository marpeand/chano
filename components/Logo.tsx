'use client'

import { title } from '@/blog.config'

import { useTheme } from 'next-themes'
import Image from 'next/image'

function Logo() {
    const { resolvedTheme } = useTheme()
    let src

    switch (resolvedTheme) {
        case 'light':
            src = '/logo.light.svg'
            break
        case 'dark':
            src = '/logo.dark.svg'
            break
        default:
            src = '/logo.dark.svg' // dark logo works as default logo while the UI loads.
            break
    }

    return <Image src={src} width={30} height={30} alt={`${title} logo`} className="ml-2" />
}

export default Logo
