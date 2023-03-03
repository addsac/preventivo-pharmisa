// type = 'points' | 'ordered'

export default function List({ data, type = 'points', size = 1 }) {
  return (
    <ul className={`
        ${type === 'ordered' && 'list-decimal'}
        ${type === 'points' && 'list-disc'}
        flex flex-col gap-y-4 ml-4
    `}>
        { data.map((item, index) => (
            <li 
                key={index}
                className='list-item'
            >
                <p 
                    className={`
                        ${size == 1 && 'text-lg'}
                        ${size == 2 && 'text-base'}
                    `}
                >
                    { item }
                </p>
            </li>
        ))}
    </ul>
  )
}