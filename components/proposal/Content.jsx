import Title from '@/components/proposal/Title'
import Paragraph from '@/components/proposal/Paragraph'
import Spacing from '@/components/ui/proposal/Spacing'
import NoteHead from '@/components/proposal/NoteHead'
import ProposalImage from '@/components/proposal/ProposalImage'
import ButtonGroup from  '@/components/proposal/ButtonGroup'
import Table from '@/components/proposal/Table'
import Citation from '@/components/proposal/Citation'
import List from '@/components/proposal/List'
import Questions from '@/components/proposal/Questions'
import Step from '@/components/proposal/Step'

export default function Content() {
  return (
    <div className='col-span-8 flex flex-col py-14 text-gray-900'>
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
          text1='Conferma preventivo'
          text2='Puoi chiamarci qui'
          href2='tel:3478741848'
        />
        <Spacing height={80} />
        <ProposalImage 
          src=''
          grid={2}
        />
        <Spacing height={80} />
        <Citation 
          title='The details of the text above here:'
          description="I don't like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life, and impersonal nature of interactions."
        />
        <Spacing height={48} />
        <Table 
          rows={[
            {
              text1: 'Design process',
              text2: '2-4 week',
              description: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life.'
            },
            {
              text1: 'Development process',
              text2: '4-6 week',
              description: ''
            },
            {
              text1: 'Testing all features',
              text2: '1-2 week',
              description: ''
            },
          ]}
          finalRows={[
            {
              text1: 'Total time',
              text2: '7-12 week',
              description: ''
            },
          ]}
        />
        <Spacing height={80} />
        
        <List
          data={[
            'Design & Development Proposal',
            'Design & Development Proposal',
            'Design & Development Proposal',
            'Design & Development Proposal',
          ]}
          type='points'
        />

        <Spacing height={80} />

        <Questions 
          data={[
            {
              question: 'Your quote is to expensive',
              answer: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life, and impersonal nature of interactions.'
            },
            {
              question: 'Why the 50% deposit?',
              answer: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life, and impersonal nature of interactions.'
            },
            {
              question: 'Can we do a retainer after the project',
              answer: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life, and impersonal nature of interactions.'
            }
          ]}
        />

        <Spacing height={80} />

        <Step 
          data={[
            {
              title: 'Design phase',
              description: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life',
              index: '01'
            },
            {
              title: 'Design phase',
              description: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life',
              index: '02'
            },
            {
              title: 'Design phase',
              description: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life',
              index: '03'
            },
            {
              title: 'Design phase',
              description: 'I don\'t like fluff or clutter; I aim to make things that resonate with people using an executional style which is honest and direct. In a digital context that means working to overcome the default distance, half-life',
              index: '04'
            }
          ]}
          type='grid'
        />

    </div>
  )
}
