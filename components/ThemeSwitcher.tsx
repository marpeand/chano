import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiSolidSun } from 'react-icons/bi'
import { FaRegMoon } from 'react-icons/fa'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            aria-label="theme toggle button"
            className="p-2 "
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' || resolvedTheme === 'dark' ? (
                <BiSolidSun className="theme-icon dark:hover:fill-white" />
            ) : (
                <FaRegMoon className="theme-icon" />
            )}
        </button>
    )
}

export default ThemeSwitcher
