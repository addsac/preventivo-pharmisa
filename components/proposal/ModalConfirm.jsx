import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import Paragraph from './Paragraph'


export default function ModalConfirm() {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)

  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        class="z-50 fixed inset-0 overflow-y-scroll"
    >
        <div
            onClick={() => setConfirmModal(false)} 
            class="fixed inset-0 bg-gray-800/50 backdrop-blur-sm shadow-sm cursor-pointer"
        ></div>
        <div class="w-[calc(100%-48px)] h-auto max-w-[600px] rounded-xl shadow-xl bg-white absolute top-6 lg:top-16 left-1/2 transform translate-x-[-50%] p-6 lg:p-8 flex flex-col gap-y-6">
            <div class="flex items-center justify-between">
                <p class="text-2xl font-medium"> Per confermare il preventivo: </p>
                <button onClick={() => setConfirmModal(false)} className="bg-white w-10 h-10 border border-gray-300 hover:bg-gray-200 transition rounded-full text-gray-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                       
                </button>
            </div>
            <Paragraph
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet lorem. Sed euismod, nisl vitae aliquam lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet lorem.'
                size={3}
            />
        </div>
    </motion.div>
  )
}
