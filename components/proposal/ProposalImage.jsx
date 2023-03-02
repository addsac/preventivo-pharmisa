export default function ProposalImage({ grid = 1 }) {
  return (
    <>
        { grid == 1 && (
            <div 
                className='w-full h-[500px] bg-gray-100 rounded-xl'
            />
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
