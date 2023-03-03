import Image from 'next/image'
import Button from '@/components/ui/proposal/Button'
import { useRecoilState } from 'recoil'
import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'

export default function LayoutContent({ children }) {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)
  
  return (
    <div className='relative w-full grid grid-cols-8 gap-x-6 px-8 lg:px-20 pt-[126px]'>
      {/* description */}
      <div className='fixed top-0 h-[96px] lg:h-[126px] left-0 right-0 pl-8 pr-8 lg:pr-20 flex items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-xl'>
        {/* Logo */}
        <div className="h-[32px] lg:h-[40px] z-10">
          <Image 
            src='/proposal/logo.svg' 
            width={200} 
            height={40} 
            alt='' 
            className='h-full w-auto max-w-full max-h-full' 
          />  
        </div>

        <div className="flex flex-col gap-0.5 text-right text-gray-900">
          <p className="text-sm lg:text-base font-medium">
            Preventivo Cugini Sandri s.r.l
          </p>
          <p className="text-sm font-medium opacity-50 tracking-[-0.1px]">
            Questo sito è riservato
          </p>
        </div>
      </div>

      {/* button fixed on bottom for mobile */}
      <div className="lg:hidden fixed bottom-0 border-t border-gray-200 px-8 py-4 flex items-center justify-center left-0 right-0 bg-white/80 backdrop-blur-xl">
        <Button 
          color='primary'
          size='base'
          text='Conferma preventivo'
          handleClick={() => setConfirmModal(true)}
          iconArrow={true}
        />
      </div>

      { children }
    </div>
  )
}
