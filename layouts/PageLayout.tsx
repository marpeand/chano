import { ReactNode } from 'react'

interface PageLayoutProps {
    children: ReactNode
    title: string
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
    return (
        <div className="mt-5 flex w-full md:w-9/12">
            <div className="flex w-full flex-col">
                <div className="mb-10">
                    <h1 className="text-3xl font-extrabold capitalize">{title}</h1>
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default PageLayout
