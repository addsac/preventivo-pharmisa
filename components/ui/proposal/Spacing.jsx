export default function Spacing({ height }) {
    return (
        <div
            className={`
            w-full 
            ${height == 24 && 'h-6'}
            ${height == 48 && 'h-12'}
            ${height == 80 && 'h-20'}
        `}
        />
    )
}
