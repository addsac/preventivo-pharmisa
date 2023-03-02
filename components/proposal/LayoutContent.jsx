export default function LayoutContent({ children }) {
  return (
    <div className='relative w-full grid grid-cols-8 gap-x-6 px-20 pt-[126px] ml-[320px]'>
      {/* description */}
      <div className='fixed top-0 h-[126px] left-0 right-0 px-20 flex items-center justify-end border-b border-gray-200 bg-white/80 backdrop-blur-xl'>
        <div className="flex flex-col gap-0.5 text-right text-gray-900">
          <p className="font-medium">
            Apple Website Proposal
          </p>
          <p className="text-sm font-medium opacity-50 tracking-[-0.1px]">
            This site is confidential
          </p>
        </div>
      </div>

      { children }
    </div>
  )
}
