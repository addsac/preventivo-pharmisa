import Image from 'next/image'

export default function LayoutContent({ children }) {
  return (
    <div className='relative w-full grid grid-cols-8 gap-x-6 px-20 pt-[126px] ml-[320px]'>
      {/* description */}
      <div className='fixed top-0 h-[126px] left-0 right-0 pl-8 pr-20 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-xl'>
        {/* Logo */}
        <div className="bg-white h-[40px] z-10">
          <Image 
            src='/proposal/logo.svg' 
            width={200} 
            height={40} 
            alt='' 
            className='h-full w-auto max-w-full max-h-full' 
          />  
        </div>

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
