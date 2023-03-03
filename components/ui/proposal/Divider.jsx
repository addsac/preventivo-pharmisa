// theme = 'light' | 'dark'

export default function Divider({ theme = 'light' }) {
    return (
        <div
            className={`
                ${theme == 'light' && ' border-b border-gray-200'}
                ${theme == 'dark' && ' border-b border-gray-900'}
                h-px w-full
            `}
        />
    )
}
