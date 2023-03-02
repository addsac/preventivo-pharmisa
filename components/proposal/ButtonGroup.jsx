import Button from '@/components/ui/proposal/Button'

export default function ButtonGroup({ text1 = '', text2 = '' }) {
  return (
    <div className='flex gap-x-6'>
        <Button 
            color='primary'
            size='base'
            text={text1}
            iconArrow={true}
        />
        <Button 
            color='secondary'
            size='base'
            text={text2}
            iconArrow={true}
        />
    </div>
  )
}
