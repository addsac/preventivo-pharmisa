export default function Questions({ data }) {
  return (
    <div className='flex flex-col gap-y-10'>
        { data.map((item) => (
            <div className='flex flex-col border-b border-black'>
                <h5 className='leading-[130%]'> { item.question } </h5>
                <div className="h-6"></div> {/* spacing */}
                <p className='text-lg leading-[170%]'> { item.answer } </p>
                <div className="h-8"></div> {/* spacing */}
            </div>
        ))}
    </div>
  )
}
