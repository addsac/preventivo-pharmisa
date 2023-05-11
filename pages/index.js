import LayoutSidebar from '@/components/proposal/LayoutSidebar'
import LayoutContent from '@/components/proposal/LayoutContent'
import Sidebar from '@/components/proposal/Sidebar'
import Content from '@/components/proposal/Content'
import ModalConfirm from '@/components/proposal/ModalConfirm'
import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'
import { useRecoilState } from 'recoil'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  const [confirmModal] = useRecoilState(confirmModalState)
  
  return (
    <>
      <Head>
        <title>Preventivo sito web | Pharmisa s.r.l.</title>
        <meta name="description" content="by Pegaso Digital Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='relative min-w-screen flex'>
        {/* Sidebar */}
        <LayoutSidebar>
          <Sidebar />
        </LayoutSidebar>

        {/* -------- */}

        {/* Content */}
        <LayoutContent>
          <Content />
        </LayoutContent>

        {/* -------- */}

        {/* Confirm Modal */}
        <AnimatePresence>
          {confirmModal && (
            <ModalConfirm />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
