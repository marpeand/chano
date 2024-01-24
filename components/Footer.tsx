import { author, social } from '@/blog.config';

const SocialLink = ({ link, name }: { link: string; name: string }) => {
    if (!link) {
        return null
    }

    return (
        <a
            className="px-3 py-1 text-[17px] hover:underline md:text-sm"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={link}
        >
            {name}
        </a>
    )
}
const Footer = () => {
    return (
        <footer className="mt-10 flex w-[90%] flex-col-reverse justify-between text-sm font-light text-black dark:text-silver lg:flex-row 2xl:w-3/6">
            <div className="lg:w-1/6">
                <p className="my-5 flex justify-center xl:my-0">
                    © {author} ({new Date().getFullYear()})
                </p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-around">
                <SocialLink link={social.github} name="github" />
                <SocialLink link={social.twitter} name="X (twitter)" />
                <SocialLink link={social.linkedin} name="linkedin" />
                <SocialLink link={social.coffee} name="buy me a coffe" />
                <SocialLink link={social.kofi} name="kofi" />
                <SocialLink link={social.mastodon} name="mastodon" />
                <SocialLink link={social.resume} name="my resume" />
            </div>
        </footer>
    )
}

export default Footer
