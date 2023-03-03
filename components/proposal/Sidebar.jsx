import Button from '@/components/ui/proposal/Button'
import { useRecoilState } from 'recoil'
import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'

export default function Sidebar() {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)

  const goToSection = (id) => {
    const element = document.getElementById(id)

    // get the y of th element
    const y = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({ top: y - 128, behavior: 'smooth' })
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
                            className='button-sidebar-menu'
                        >
                            Overview
                        </button>
                        <button 
                            onClick={ () => goToSection('2') }
                            className='button-sidebar-menu'
                        >
                            Risultato
                        </button>
                        <button 
                            onClick={ () => goToSection('4') }
                            className='button-sidebar-menu button-sidebar-menu-active'
                        >
                            Gestione contenuti
                        </button>
                        <button 
                            onClick={ () => goToSection('5') }
                            className='button-sidebar-menu'
                        >
                            Prezzo
                        </button>
                        <button 
                            onClick={ () => goToSection('6') }
                            className='button-sidebar-menu'
                        >
                            Tecnologie
                        </button>
                        <button 
                            onClick={ () => goToSection('7') }
                            className='button-sidebar-menu'
                        >
                            Tempi di sviluppo
                        </button>
                        <button 
                            onClick={ () => goToSection('8') }
                            className='button-sidebar-menu'
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
