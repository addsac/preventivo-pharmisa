import IconArrow from '@/public/icon/proposal/arrow-right.svg'

export default function Button({ color = 'primary', size = 'base', text = '', href, handleClick, iconArrow = false  }) {
  return (
    <button
        onClick={ href ? () => location.href = href : handleClick ? handleClick : null }
        className={`
            ${color == 'primary' && 'bg-gray-900 hover:bg-gray-800 text-white'}
            ${color == 'secondary' && 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
            ${size == 'base' && 'px-5 py-3'}
            ${size == 'large' && 'text-lg px-6 py-4'}
            w-full
            flex flex-wrap items-center justify-between 
            gap-2
            rounded-lg
            transition duration-100
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
                    stroke-[1.5]
                `}
            >
                <svg
                    width="currentWidth" height="currentHeight" viewBox="0 0 22 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <path
                        d="M0.640137 7.15385H20.3324M20.3324 7.15385L13.8709 1M20.3324 7.15385L14.1786 13"
                        stroke="currentColor"
                    />
                </svg>
            </span>
        )}
    </button>
  )
}
