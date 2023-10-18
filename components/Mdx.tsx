'use client'

import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useRef, useState } from 'react'

const Pre = ({ children, className }: { children: ReactNode; className?: string }) => {
    const textInput = useRef(null)
    const [hovered, setHovered] = useState(false)
    const [copied, setCopied] = useState(false)

    const onEnter = () => {
        setHovered(true)
    }
    const onExit = () => {
        setHovered(false)
        setCopied(false)
    }
    const onCopy = () => {
        setCopied(true)
        // Agregar funcion para copiar
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative z-0">
            {hovered && (
                <button
                    aria-label="Copy code"
                    className={`bg-gray-700 dark:bg-gray-800 absolute right-2 top-2  rounded-xl border-2 p-1 ${
                        copied
                            ? 'border-green-400 focus:border-green-400 focus:outline-none'
                            : 'border-gray-300'
                    }`}
                    onClick={onCopy}
                >
                    <>{copied ? <span>Copied!</span> : <span>Copy Code</span>}</>
                </button>
            )}

            <pre className={className}>{children}</pre>
        </div>
    )
}

const CustomLink = (props: any) => {
    const href = props.href

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...props}>
                {props.children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...props} />
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: any) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
}

const components: MDXComponents = {
    Image: RoundedImage,
    pre: Pre,
    a: CustomLink,
}

export function MdxRenderer({ code }: { code: string }) {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}
