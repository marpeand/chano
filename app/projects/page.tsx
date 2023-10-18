import { allProjects } from '@/.contentlayer/generated'
import ProjectCard from '@/components/ProjectCard'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A list of all my personal projects',
}

interface Project {
    name: string
    href: string
    imgSrc: string
    description: string
}

const Projects: React.FC = () => {
    const projects: Record<string, Project[]> = allProjects[0].projects
    return (
        <PageLayout title="Projects">
            {Object.keys(projects).map((category) => (
                <div key={category} className="mb-10">
                    <h1 className="mb-5 text-center text-lg font-bold">{category}</h1>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {projects[category].map((project) => (
                            <ProjectCard
                                key={project.name}
                                title={project.name}
                                href={project.href}
                                image={project.imgSrc}
                                description={project.description}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </PageLayout>
    )
}

export default Projects
