import Button from '@/components/ui/proposal/Button'
import { useRecoilState } from 'recoil'
import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'
import { useState } from 'react'

export default function Sidebar() {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)
  const [activeMenu, setActiveMenu] = useState('1')

  const goToSection = (id) => {
    setActiveMenu(id)

    const element = document.getElementById(id)

    // get the y of th element
    const y = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({ top: y - 168, behavior: 'smooth' })
  }

  return (
    <>
        {/* menu */}
        <div className='sticky top-0 flex flex-col'>
            <div className="w-full h-[48px]"></div> {/* space for the header */}

            {/* Navigation */}
            <div className='flex flex-col gap-y-16 mt-[108px]'>
                <div className='flex flex-col gap-y-6'>
                    <p className='text-sidebar-subtitle'>
                        Sezioni
                    </p>

                    <div className="flex flex-col">
                        <button
                            onClick={() => goToSection('1')}
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '1' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Overview
                        </button>
                        <button 
                            onClick={ () => goToSection('2') }
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '2' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Obbiettivo
                        </button>
                        <button 
                            onClick={ () => goToSection('3') }
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '3' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Gestione contenuti
                        </button>
                        <button 
                            onClick={ () => goToSection('4') }
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '4' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Tecnologie
                        </button>
                        <button 
                            onClick={ () => goToSection('5') }
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '5' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Prezzo
                        </button>
                        <button 
                            onClick={ () => goToSection('6') }
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '6' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Prossimi passi
                        </button>
                        <button 
                            onClick={ () => goToSection('7') }
                            className={`
                                button-sidebar-menu
                                ${activeMenu === '7' ? 'button-sidebar-menu-active' : ''}
                            `}
                        >
                            Domande
                        </button>
                    </div>
                </div>
                <Button
                    text='Conferma preventivo'
                    color='primary'
                    size='large'
                    handleClick={() => setConfirmModal(true)}
                    iconArrow={true}
                />
            </div>
        </div>
    </>
  )
}
