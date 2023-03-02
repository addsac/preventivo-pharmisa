import IconArrow from '@/public/icon/proposal/arrow-right.svg'

export default function Button({ color = 'primary', size = 'base', text = '', iconArrow = false  }) {
  return (
    <button
        className={`
            ${color == 'primary' && 'bg-gray-900 text-white'}
            ${color == 'secondary' && 'bg-gray-100 text-gray-900'}
            ${size == 'base' && 'px-5 py-3'}
            ${size == 'large' && 'text-lg px-6 py-4'}
            w-full
            flex items-center justify-between 
            rounded-lg
        `}
    >
        <p>
            { text }
        </p>
        { iconArrow && (
            <span 
                className={`
                    ${size == 'base' && 'h-[12px] w-auto'}
                    ${size == 'large' && 'h-[16px] w-auto'}
                `}
            >
                <IconArrow />
            </span>
        )}
    </button>
  )
}
