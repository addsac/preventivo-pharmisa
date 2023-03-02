export default function LayoutContent({ children }) {
  return (
    <div className='relative w-full grid grid-cols-8 gap-x-6 px-20'>
        {/* border */}
        <div className='absolute top-[126px] h-px left-0 right-0 bg-gray-200'></div>

        {/* description */}
        <div className='absolute top-0 h-[126px] left-20 right-20 flex items-center justify-end'>
          <div className="flex flex-col gap-0.5 text-right text-gray-900">
            <p className="font-medium">
              Apple Website Proposal
            </p>
            <p className="text-sm font-medium opacity-50">
              This site is confidential
            </p>
          </div>
        </div>

        { children }
    </div>
  )
}
