import { Post, allPosts } from '@/.contentlayer/generated'
import Card from '@/components/Card'
import PageLayout from '@/layouts/PageLayout'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
    const tag = params.tag
    return {
        title: `#${tag}`,
        description: `${tag} tagged posts`,
    }
}

const Tag = ({ params }) => {
    const filteredPosts: Post[] = allPosts.filter((post) => {
        return post.tags?.some((tag) => slug(tag) === params.tag)
    })

    return (
        <PageLayout title={`# ${params.tag}`}>
            <ul className="mt-5 w-full justify-center space-y-4">
                {filteredPosts.map((post) => (
                    <li key={post.slug}>
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

export default Tag
