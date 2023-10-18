import Link from 'next/link'
import React from 'react'
import FormatDate from './FormatDate'

interface CardProps {
    href: string
    title: string
    summary: string
    date: string
    readingTime: string
}

const Card: React.FC<CardProps> = (props) => {
    const { href, title, summary, date, readingTime } = props
    return (
        <Link href={href}>
            <div className="flex w-full flex-col md:flex-row">
                <div className="flex w-full flex-col ">
                    <h1 className="flex items-center text-lg font-semibold">
                        {title}
                        <span className="ml-3 hidden text-sm font-light text-gray dark:text-slate sm:inline-block ">
                            ({readingTime})
                        </span>
                    </h1>
                    <p className="mt-1 hidden text-sm font-light text-black dark:text-silver md:flex ">
                        {summary}
                    </p>
                </div>

                <FormatDate dateString={date} />
            </div>
        </Link>
    )
}

export default Card
