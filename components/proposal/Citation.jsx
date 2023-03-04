import Paragraph from '@/components/proposal/Paragraph'

export default function Citation({ title = '', description = '' }) {
  return (
    <div className='w-full p-4 flex flex-col gap-y-5 bg-gray-100 rounded-lg'>
      <Paragraph
        text={title}
        size={1}
        weight='medium'
      />
      <Paragraph
        text={description}
        size={3}
      />
    </div>
  )
}
