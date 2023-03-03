import Button from '@/components/ui/proposal/Button'

export default function ButtonGroup({ text1 = '', text2 = '', href1 = '', href2 = '', handleClick1, handleClick2 }) {
  return (
    <div className='flex gap-x-6'>
        <Button 
            color='primary'
            size='base'
            text={text1}
            href={href1}
            handleClick={handleClick1 ? handleClick1 : null}
            iconArrow={true}
        />
        <Button 
            color='secondary'
            size='base'
            text={text2}
            href={href2}
            handleClick={handleClick2 ? handleClick2 : null}
            iconArrow={true}
        />
    </div>
  )
}
