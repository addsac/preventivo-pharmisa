export default function List({ data, type = 'points' }) {
  return (
    <ul className={`
        ${type === 'ordered' && 'list-decimal'}
        ${type === 'points' && 'list-disc'}
        flex flex-col gap-y-4 ml-4
    `}>
        { data.map((item) => (
            <li className='list-item'>
                <p className='text-lg'>
                    { item }
                </p>
            </li>
        ))}
    </ul>
  )
}