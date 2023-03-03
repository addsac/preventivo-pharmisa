// type = 'row' | 'grid'

export default function Step({ type = 'row', data =[] }) {
  return (
    <div 
        className={`
            grid grid-cols-12
            ${type == 'row' && 'gap-y-10'} 
            ${type == 'grid' && 'gap-x-10 gap-y-20'} 
        `}
    >
        { data.map((item, index) =>  (
            <div 
                key={index}
                className={`
                    flex flex-col gap-y-6 pb-10
                    ${type == 'row' && 'col-span-12 border-b border-black'}
                    ${type == 'grid' && 'col-span-6'}
                `}
            >
                <p className='text-[32px] leading-[100%] min-w-[120px]'>
                    { item.index }
                </p>
                <div className='flex flex-col gap-y-6'>
                    <h5 className='text-xl'>
                        { item.title }
                    </h5>
                    <p className='text-lg leading-[170%]'>
                        { item.description }
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}
