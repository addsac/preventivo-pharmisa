// type = 'points' | 'ordered' | 'none'

export default function List({ data, type = 'points', size = 1 }) {
  return (
    <ul className={`
        ${type === 'ordered' && 'list-decimal ml-4'}
        ${type === 'points' && 'list-disc ml-4'}
        ${type === 'none' && 'list-none'}
        flex flex-col gap-y-4 
    `}>
        { data.map((item, index) => (
            <li 
                key={'list-' + index}
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