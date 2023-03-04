export default function Paragraph({ size = 1, text = '', weight = 'normal', shrink = true }) {
  return (
    <>
        {size == 1 && (
            <p 
                className={`
                    text-lg lg:text-xl leading-[170%]
                    ${!shrink && 'shrink-0' }
                    font-${weight}
                `}
            >
                { text }
            </p>
        )}
        {size == 2 && (
            <p 
                className={`
                    text-base lg:text-lg leading-[170%]
                    ${!shrink && 'shrink-0' }
                    font-${weight}
                `}
            >
                { text }
            </p>
        )}
        {size == 3 && (
            <p 
                className={`
                    text-sm lg:text-base leading-[170%]
                    ${!shrink && 'shrink-0' }
                    font-${weight}
                `}
            >
                { text }
            </p>
        )}
    </>
  )
}
