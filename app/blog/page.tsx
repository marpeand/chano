import { allPosts } from '@/.contentlayer/generated'
import PageLayout from '@/layouts/PageLayout'

import Card from '@/components/Card'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'All my Posts',
}
const Blog = () => {
    const posts = allPosts.filter((post) => post.draft !== true)
    return (
        <PageLayout title="All my Posts">
            <ul className="mt-5 w-full justify-center space-y-4">
                {posts.map((post) => (
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
        </PageLayout>
    )
}

export default Blog
