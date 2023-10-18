import Search from '@/components/Search'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Archive',
    description: 'Search any article',
}
const Archive = () => {
    return (
        <PageLayout title="Archive">
            <Search />
        </PageLayout>
    )
}

export default Archive
