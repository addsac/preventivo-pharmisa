import Title from '@/components/proposal/Title'
import Paragraph from '@/components/proposal/Paragraph'
import Spacing from '@/components/ui/proposal/Spacing'
import NoteHead from '@/components/proposal/NoteHead'
import ProposalImage from '@/components/proposal/ProposalImage'
import ButtonGroup from  '@/components/proposal/ButtonGroup'

export default function Content() {
  return (
    <div className='col-span-8 flex flex-col py-20 text-gray-900'>
        <Title 
          text='Design & Development Proposal'
          size={1}
        />
        <Spacing height={48} />
        <Paragraph 
          text="I don't like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life, and impersonal nature of interactions, in order to create things that are able to sit comfortably in their digital skin whilst still being able to connect deeply with their audience. The result is something that often leans minimal in appearance, but is filled with nuance and care in all the right places."
          size={1}
        />
        <Spacing height={48} />
        <NoteHead 
          client='Pegaso Digital Studio'
          author='Apple Developer Inc.'
        />
        <Spacing height={48} />
        <ButtonGroup
          text1='View contract'
          text2='Contact the seller'
        />
        <Spacing height={80} />
        <ProposalImage 
          src=''
          grid={2}
        />

    </div>
  )
}
