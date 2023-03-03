import Image from 'next/image'

export default function ProposalImage({ src = '', grid = 1 }) {
  return (
    <>
        { grid == 1 && (
            <div 
                className='w-full h-auto bg-gray-100 rounded-xl overflow-clip'
            >
                <Image 
                    src={src}
                    width={1000}
                    height={500}
                    className='w-full h-auto object-cover'
                    alt='Proposal main Image'
                />
            </div>
        )}
        { grid == 2 && (
            <div className='flex gap-x-6'>
                <div 
                    className='w-full h-[500px] bg-gray-100 rounded-xl'
                />
                <div 
                    className='w-full h-[500px] bg-gray-100 rounded-xl'
                />
            </div>
        )}
    </>
  )
}
