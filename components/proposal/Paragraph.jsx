export default function Paragraph({ size = 1, text = ''}) {
  return (
    <>
        {size == 1 && (
            <p className='text-xl leading-[170%]'>
                { text }
            </p>
        )}
    </>
  )
}
