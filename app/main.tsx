'use client'
import type { Post } from '@/.contentlayer/generated'
import { allPosts } from '@/.contentlayer/generated'
import { postPerPage } from '@/blog.config'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import React, { useState } from 'react'

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const filteredPosts = allPosts.filter((post: any) => !post.draft)
    const currentPosts = filteredPosts
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(indexOfFirstPost, indexOfLastPost)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <React.Fragment>
            <div className="mt-10 flex w-full grow flex-col space-y-4 md:w-4/6 lg:w-5/6 ">
                {!currentPosts.length && (
                    <div className="mt-5 flex justify-center">
                        <span>No posts found!</span>
                    </div>
                )}
                {currentPosts.map((post: Post) => (
                    <Card
                        readingTime={post.readingTime.text}
                        title={post.title}
                        summary={post.summary}
                        date={post.date}
                        href={post.url}
                        key={post.slug}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPosts={filteredPosts.length}
                postsPerPage={postPerPage}
                onPageChange={handlePageChange}
            />
        </React.Fragment>
    )
}

export default Main
