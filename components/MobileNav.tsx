import { links } from '@/blog.config'
import { cn } from '@/utils/cn'

interface MobileNavProps {
    toggleNavBar: boolean
}

const MobileNav = ({ toggleNavBar }: MobileNavProps) => {
    return (
        <div
            className={cn(
                'absolute top-[5rem] z-[1] flex h-full w-screen justify-center backdrop-blur-md transition-opacity duration-300 ease-in-out xl:hidden',
                toggleNavBar ? 'opacity-100' : 'pointer-events-none opacity-0'
            )}
        >
            <div className="flex justify-center pt-32">
                <ul className="flex flex-col items-center space-y-10">
                    {links.map((item) => (
                        <li className="font-bold" key={item.id}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileNav
