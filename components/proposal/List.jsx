// type = 'points' | 'ordered' | 'none'

import Paragraph from '@/components/proposal/Paragraph'

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
                className='list-item'
                key={index}
            >
                <Paragraph 
                    text={item}
                    size={size == 1 ? 2 : size == 2 ? 3 : 1}
                />
            </li>
        ))}
    </ul>
  )
}