interface PaginationProps {
    currentPage: number
    totalPosts: number
    postsPerPage: number
    onPageChange: (pageNumber: number) => void
}

const Pagination = ({ currentPage, totalPosts, postsPerPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage)
    const pageNumbers: number[] = Array.from({ length: totalPages }, (_, i) => i + 1)

    const handlePageClick = (pageNumber: number) => {
        onPageChange(pageNumber)
    }

    if (pageNumbers.length === 1) {
        return null
    }

    return (
        <div className="mt-5 flex w-full justify-center text-sm text-black dark:text-silver">
            {pageNumbers.map((pageNumber) => (
                <span
                    key={pageNumber}
                    className={`mr-2 cursor-pointer py-1 text-lg md:text-sm ${
                        pageNumber === currentPage ? 'underline' : ''
                    }`}
                    onClick={handlePageClick.bind(null, pageNumber)}
                >
                    {pageNumber}
                </span>
            ))}
        </div>
    )
}

export default Pagination
