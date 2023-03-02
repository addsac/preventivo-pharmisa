export default function Citation({ title = '', description = '' }) {
  return (
    <div className='w-full p-4 flex flex-col gap-y-5 bg-gray-100 rounded-lg'>
         <p className='text-xl font-medium'>
            { title }
         </p>
         <p className='text-base'>
            { description }
         </p>
    </div>
  )
}
