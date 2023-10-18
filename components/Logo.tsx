'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Logo() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    let src

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    switch (resolvedTheme) {
        case 'light':
            src = '/logo.light.svg'
            break
        case 'dark':
            src = '/logo.dark.svg'
            break
        default:
            src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            break
    }

    return <Image src={src} width={30} height={30} alt="" className="ml-2" />
}

export default Logo
