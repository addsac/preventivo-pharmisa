export default function NoteHead({  client = '', author = '' }) {
  return (
    <div className='flex flex-wrap gap-x-12'>
        <p className='text-lg font-medium'>
            Prepared for:
            <span className='font-[400]'> { client } </span>
        </p>
        <p className='text-lg font-medium'>
            Prepared by:
            <span className='font-[400]'> { author } </span>
        </p>
    </div>
  )
}
