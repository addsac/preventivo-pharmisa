import Button from '@/components/ui/proposal/Button'
import { useRecoilState } from 'recoil'
import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'
import { useEffect, useState } from 'react'
import { activeMenuState } from '@/store/proposal/atom/ActiveMenuAtom'

export default function Sidebar() {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)
  const [activeMenu, setActiveMenu] = useState('1')
  
  const [arrayLinks] = useState(['Overview', 'Obbiettivo', 'Gestione contenuti', 'Tecnologie', 'Prezzo', 'Prossimi passi', 'Domande'])

  const goToSection = (id) => {
    const element = document.getElementById(id)

    // get the y of th element
    const y = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({ top: y - 168, behavior: 'smooth' })
  }

  /* set the active menu on scroll */
  const [activeMenuStore, setActiveMenuStore] = useRecoilState(activeMenuState)

  let observerConfig = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
  }

  function observerFn(entries, observer) {
      entries.map(entry => {
        if(entry.isIntersecting) {
            setActiveMenuStore(String(entry.target.id))
        }
      })
  }

  useEffect(() => {
    setActiveMenu(activeMenuStore)
  }, [activeMenuStore])

  useEffect(() => {
        // set the active menu on scroll
        let observer = new IntersectionObserver(observerFn, observerConfig)

        const ids = [1, 2, 3, 4, 5, 6, 7]

        ids.map((id) => {
            const el = document.getElementById(String(id))
            observer.observe(el)
        })
    
        return () => {
            ids.map((id) => {
                const el = document.getElementById(String(id))
                observer.unobserve(el)
            })
        }
  }, [observerConfig, observerFn])

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
                        {arrayLinks.map((text, index) => (
                            <button
                                key={'button-sidebar-' + text.replace(' ', '-')}
                                onClick={() => goToSection(String(index + 1))}
                                className={`
                                    button-sidebar-menu
                                    ${activeMenu === String(index + 1) ? 'button-sidebar-menu-active' : ''}
                                `}
                            >
                                { text }
                            </button>
                        ))}
                    </div>
                </div>
                <Button
                    text='Come confermare'
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
