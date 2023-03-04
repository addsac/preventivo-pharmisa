import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import Paragraph from '@/components/proposal/Paragraph'
import List from '@/components/proposal/List'
import { Fragment } from 'react'
import Divider from '@/components/ui/proposal/Divider'

export default function ModalConfirm() {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.19, ease: 'easeInOut' }}
        class="z-50 fixed inset-0 overflow-y-scroll"
    >
        <div
            onClick={() => setConfirmModal(false)} 
            class="fixed inset-0 bg-gray-800/50 backdrop-blur-sm shadow-sm cursor-pointer"
        ></div>
        <div class="w-[calc(100%-48px)] h-auto max-w-[600px] rounded-xl shadow-xl bg-white absolute top-6 lg:top-16 left-1/2 transform translate-x-[-50%] p-6 lg:p-8 flex flex-col gap-y-6">
            <div class="flex items-start justify-between">
                <p class="text-2xl font-medium"> Per confermare il preventivo: </p>
                <button onClick={() => setConfirmModal(false)} className="bg-white p-6 border border-gray-300 hover:bg-gray-200 transition rounded-full text-gray-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                       
                </button>
            </div>
            <Paragraph
                text='Per confermare il preventivo contattaci ai seguenti link indicati qui sotto. Includi alla mail il nome della tua azienda e il link di questo preventivo.'
                size={3}
            />
            <div></div>
            <Divider theme='light' />
            <div></div>
            <List 
                data={[
                    <Fragment key={1}> Inviaci una mail a <a href='mailto:info@pegasodigitalstudio.com' className='font-medium hover:underline'>info@pegasodigitalstudio.com</a> </Fragment>,
                    <Fragment key={2}> Chimaci al numero <a href='tel:3478758148' className='font-medium hover:underline'>+39 3478758148</a> </Fragment>,
                ]}
                type='points'
                size={2}
            />
        </div>
    </motion.div>
  )
}
