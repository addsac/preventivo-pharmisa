export default function NoteHead({  client = '', author = '' }) {
  return (
    <div className='flex flex-wrap gap-x-12 gap-y-2'>
        <p className='text-base lg:text-lg font-medium'>
            Preparato per:
            <span className='font-[400]'> { client } </span>
        </p>
        <p className='text-base lg:text-lg font-medium'>
            Preparato da:
            <span className='font-[400]'> { author } </span>
        </p>
    </div>
  )
}
