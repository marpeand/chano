'use client'

import { allPosts } from '@/.contentlayer/generated'
import Card from '@/components/Card'
import { ChangeEvent, useState } from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return (
        <>
            <input
                className="w-full rounded border-2 border-solid p-2 px-3 font-medium outline-none"
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Type to search articles"
                aria-label="Search articles"
            />
            {filteredPosts.length === 0 ? (
                <div className="mt-10 flex justify-center ">
                    <span className="font-bold">No posts found!</span>
                </div>
            ) : (
                <ul className="mt-5 flex w-full flex-col justify-center">
                    {filteredPosts.map((post) => (
                        <li key={post.slug} className="mt-4">
                            <Card
                                readingTime={post.readingTime.text}
                                href={`${post.url}`}
                                title={post.title}
                                summary={post.summary}
                                date={post.date}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Search
