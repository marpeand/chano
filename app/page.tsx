import { author, authorIntroduction } from '@/blog.config'

import Image from 'next/image'
import Main from './main'

export default async function Page() {
    return (
        <div className="flex grow flex-col items-center lg:w-5/6">
            <div className="flex items-center md:w-4/6 lg:w-5/6">
                <Image
                    src="/avatar.png"
                    width={80}
                    height={80}
                    alt="logo"
                    className="mr-4 hidden rounded-full md:block"
                />
                <div className="flex flex-col">
                    <h1 className="mb-2 text-3xl font-bold">{author}</h1>
                    <p className="font-base text-onyx dark:text-silver ">{authorIntroduction}</p>
                </div>
            </div>
            <Main />
        </div>
    )
}
