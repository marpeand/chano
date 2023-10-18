import { compareDesc, parseISO } from 'date-fns'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import { allPosts } from '../.contentlayer/generated/index.mjs'
import CONFIG from '../blog.config.js'

const feed = new Feed({
    title: CONFIG.title,
    description: CONFIG.siteDescription,
    link: CONFIG.url,
    language: CONFIG.lang,
    favicon: `${CONFIG.url}/favicon.png`,
    copyright: `All rights reserved ${CONFIG.year}, ${CONFIG.author}`,
    author: {
        name: CONFIG.author,
        link: CONFIG.socialLink,
    },
})

allPosts
    .filter((post) => {
        post.draft !== true
    })
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .forEach((post) => {
        const url = `${CONFIG.url}/blog/${post._raw.flattenedPath}`
        feed.addItem({
            id: url,
            link: url,
            title: post.title,
            description: post.summary,
            date: parseISO(post.date),
            category: post.tags.map((name) => ({ name })),
        })
    })

writeFileSync('./public/rss.xml', feed.rss2(), { encoding: 'utf-8' })
