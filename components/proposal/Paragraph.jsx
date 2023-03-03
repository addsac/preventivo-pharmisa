export default function Paragraph({ size = 1, text = ''}) {
  return (
    <>
        {size == 1 && (
            <p className='text-xl leading-[170%]'>
                { text }
            </p>
        )}
        {size == 2 && (
            <p className='text-lg leading-[170%]'>
                { text }
            </p>
        )}
        {size == 3 && (
            <p className='text-base leading-[170%]'>
                { text }
            </p>
        )}
    </>
  )
}
