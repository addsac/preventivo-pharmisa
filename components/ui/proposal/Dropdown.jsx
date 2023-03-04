import { activeMenuState } from '@/store/proposal/atom/ActiveMenuAtom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useRecoilState } from 'recoil'

export default function Dropdown({ array = [], size = 'base' }) {
  const [boolModal, setBoolModal] = useState(false)
  const [activeText, setActiveText] = useState(array[0])

  const ref = useDetectClickOutside({ onTriggered: () => {setBoolModal(false)} });

  const dropClicked = (item, index) => {
    // setActiveText(item)
    goToSection(index + 1)
    setBoolModal(false)
  }

  const goToSection = (id) => {
    const element = document.getElementById(id)

    // get the y of th element
    const y = element.getBoundingClientRect().top + window.scrollY

    window.scrollTo({ top: y - 168, behavior: 'smooth' })
  }

  // change the active link base on the store
  const [activeMenuStore] = useRecoilState(activeMenuState)

  useEffect(() => {
    const string = array[activeMenuStore - 1]
    setActiveText(string)
  }, [activeMenuStore])

  return (
    <div 
      ref={ref}
      className='relative'
    >
      <AnimatePresence>
        {boolModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24, originX: 0, originY: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 24 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
            className="absolute top-0 -mt-[220px] left-0 w-[208px] h-[208px] overflow-scroll p-1 bg-white border border-gray-200 rounded-xl flex flex-col [box-shadow:_0px_0px_4px_4px_rgba(0,_0,_0,_0.01)] z-50"
          >
            {array.map((item, index) => (
              <button
                key={index}
                onClick={() => dropClicked(item, index)}
                className={`
                  ${size == 'base' && 'px-5 py-3'}
                  ${size == 'large' && 'text-lg px-6 py-4'}
                  bg-white hover:bg-gray-100 rounded-lg text-left
                `}
              >
                <p>
                  { item }
                </p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={ () => setBoolModal(!boolModal) }
        className={`
          ${size == 'base' && 'px-5 py-3'}
          ${size == 'large' && 'text-lg px-6 py-4'}
          border border-gray-200 bg-white hover:bg-gray-50
          max-w-[200px]
          flex flex-nowrap items-center justify-between 
          gap-4
          rounded-lg
          transition duration-100
      `}
      >
        {/* text */}
        <AnimatePresence mode='wait'>
          <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
              key={activeText}
              className='whitespace-nowrap'
            >
              { activeText.length > 10 ? (
                  activeText.slice(0, 10) + '...'
              ) : (
                  activeText
              )}
            </motion.div>
        </AnimatePresence>

        {/* icon */}
        {size == 'base' && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M11.0357 7L8.01786 10.25L5 7" stroke="#161612" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>          
        )}
        
        {size == 'large' && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M11.0357 7L8.01786 10.25L5 7" stroke="#161612" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>          
        )}
      </button>
    </div>
  )
}
