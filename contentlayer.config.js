import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'string', required: true },
        summary: { type: 'string', required: true },
        draft: { type: 'boolean', required: true },
        lastUpdate: { type: 'date', required: false },
        tags: {
            type: 'list',
            of: { type: 'string' },
            required: false,
            default: [],
        },
    },
    computedFields: {
        readingTime: {
            type: 'json',
            resolve: (post) => readingTime(post.body.raw),
        },
        slug: {
            type: 'string',
            resolve: (post) => {
                const parts = post._raw.flattenedPath.split('/')
                return parts[parts.length - 1]
            },
        },
        url: {
            type: 'string',
            resolve: (post) => {
                const parts = post._raw.flattenedPath.split('/')
                const slug = parts[parts.length - 1]
                return `/blog/${slug}`
            },
        },
    },
}))

export const About = defineDocumentType(() => ({
    name: 'About',
    filePathPattern: 'about.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
    },
}))

export const Projects = defineDocumentType(() => ({
    name: 'Projects',
    filePathPattern: 'projects.mdx',
    fields: {
        projects: { type: 'json', required: true },
    },
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post, About, Projects],
    mdx: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
            [rehypeKatex, { output: 'mathml' }],
            rehypeSlug,
            rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
})
