import { allAbouts } from '@/.contentlayer/generated'
import { MdxRenderer } from '@/components/Mdx'
import PageLayout from '@/layouts/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
    description: 'About Me',
}
const About = () => {
    return (
        <PageLayout title="About">
            <article className="prose dark:prose-invert">
                <MdxRenderer code={allAbouts[0].body.code} />
            </article>
        </PageLayout>
    )
}

export default About
