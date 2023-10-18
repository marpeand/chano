import Link from 'next/link'

interface ProjectProps {
    href: string
    title: string
    description: string
    image: string
}

export const LinkIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            strokeWidth="2"
            stroke="currentColor"
            className="h-4 w-4"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
        </svg>
    )
}

const ProjectCard = ({ title, description, image, href }: ProjectProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="delay-50 rounded-lg transition hover:bg-[#404040] hover:bg-opacity-5 dark:hover:bg-[#fff] dark:hover:bg-opacity-5"
        >
            <div className="group flex flex-col rounded-lg px-3 py-2 text-black dark:text-white ">
                <img src={image} width={35} height={35} className="my-3 " alt="Project Logo" />
                <h1 className="mt-2 font-semibold text-[#272727] dark:text-white">{title}</h1>
                <p className=" mt-1 text-sm  dark:text-silver">{description}</p>
                <p className="mt-6 flex items-center group-hover:text-[#64B1E5]">
                    <LinkIcon />
                    <span className="ml-2 text-sm font-semibold ">
                        {href.replace(/^https?:\/\//, '')}
                    </span>
                </p>
            </div>
        </Link>
    )
}

export default ProjectCard
