import Paragraph from "./Paragraph";

export default function Questions({ data }) {
  return (
    <div className='flex flex-col gap-y-10'>
        { data.map((item, index) => (
            <div key={index} className='flex flex-col border-b border-black'>
                <h5 className='leading-[130%]'> { item.question } </h5>
                <div className="h-6"></div> {/* spacing */}
                <Paragraph 
                    text={item.answer}
                    size={2}
                />
                <div className="h-8"></div> {/* spacing */}
            </div>
        ))}
    </div>
  )
}
