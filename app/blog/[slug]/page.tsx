import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { allPosts } from '@/.contentlayer/generated'
import CONFIG from '@/blog.config'

import FormatDate from '@/components/FormatDate'
import { MdxRenderer } from '@/components/Mdx'

import { slug } from 'github-slugger'

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata | undefined> {
    const post = allPosts.find((post) => post.slug === params.slug)
    if (!post) {
        return
    }
    const { title, date: publishedTime, summary: description, slug } = post

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `${CONFIG.url}/blog/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    }
}

export default function Page({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <section className="mt-5 flex w-full flex-col md:w-4/6">
            <div className="space-y-3 pb-5">
                <ul className="mb-4 flex flex-wrap">
                    {post.tags?.map((tag) => (
                        <li
                            className="mb-2 mr-2 rounded bg-white text-[14px] font-medium capitalize text-[#3e3e3e] dark:bg-[#404040] dark:text-white"
                            key={tag}
                            title={slug(tag)}
                        >
                            <Link className="px-2" href={`/tags/${slug(tag)}`}>
                                {slug(tag)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <h1 className="text-4xl font-bold">{post.title}</h1>
                <p className="text-base text-[#656565] dark:text-[#989898]">{post.summary}</p>
                <div className="text-sm text-[#8A8A8A]">
                    <span>
                        <FormatDate dateString={post.date} />
                    </span>
                    <span className="mx-2">·</span>
                    <span>{post.readingTime.text}</span>
                </div>
            </div>
            <article className="prose mb-10 mt-5 dark:prose-invert">
                <MdxRenderer code={post.body.code} />
            </article>
            <div className="prose font-extralight dark:prose-invert">
                <div className=" space-x-1">
                    <span>{'-'} reply in </span>
                    <a href="#">Twitter(x)</a>
                    <span>{'/'}</span>
                    <a href="#">Mastodon</a>
                </div>
                <div className="flex space-x-1">
                    {post.lastUpdate && (
                        <span>
                            {'-'} Last updated <FormatDate dateString={post.lastUpdate} />
                        </span>
                    )}
                </div>
            </div>
        </section>
    )
}
