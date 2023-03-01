export default function Divider({ theme }) {
    return (
        <div
            className={`
            ${theme == 'light' && 'border-gray-200'}
            ${theme == 'dark' && 'border-gray-900'}
        `}
        />
    )
}
