import { format, parseISO } from 'date-fns'

interface FormatDateProps {
    dateString: string
}

const FormatDate = ({ dateString }: FormatDateProps) => {
    const date = parseISO(dateString)
    const formattedDate = format(date, 'MMM d, yyyy')
    return (
        <time className="text-[#626363] dark:text-silver md:w-1/5 md:text-right md:text-sm">
            {formattedDate}
        </time>
    )
}

export default FormatDate
