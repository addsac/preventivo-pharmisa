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
import { useRecoilState } from 'recoil'
import { confirmModalState } from '@/store/proposal/atom/ConfirmAtom'
import { Fragment } from 'react'

export default function Content() {
  const [confirmModal, setConfirmModal] = useRecoilState(confirmModalState)

  return (
    <div className='col-span-8 flex flex-col pt-14 pb-32 text-gray-900'>
        <Title 
          id='1'
          text='Prventivo per il nuovo sito web di Pharmisa s.r.l.'
          size={1}
        />
        <Spacing height={48} />
        <Paragraph 
          text="Questo è il preventivo per lo sviluppo del nuovo sito web di Pharmisa s.r.l., a seguire potrai leggere tutti i dettagli del lavoro, come le pagine da sviluppare, i tempi di sviluppo, i costi, la manutenzione e la gestione dei contenuti del sito in autonomia. Ti invitiamo a leggere tutto con attenzione e a contattarci in caso ci sia qualsiasi dubbio."
          size={1}
        />
        <Spacing height={48} />
        <NoteHead 
          client='Pharmisa s.r.l.'
          author='Pegaso Digital Studio'
        />
        <Spacing height={48} />
        <ButtonGroup
          text1='Come confermare'
          text2='Contattaci'
          handleClick1={() => setConfirmModal(true)}
          href2='tel:3478741848'
        />
        <Spacing height={80} />
        <ProposalImage 
          src='/proposal/pharmisa_proposal_placeholder.jpg'
          grid={1}
        />

        <Spacing height={128} />

        <Title 
          id='2'
          text="L'obbiettivo del progetto"
          size={2}
        />
        <Spacing height={48} />
        <Paragraph 
          text="Il risultato del lavoro è la costruzione da zero del sito web aziendale di Pharmisa srl dove i potenziali clienti riusciranno a contattare l'azienda e a consultare facilmente il catalogo prodotti disponibili tramite formato PDF. Le fasi di lavoro saranno necessariamente la progettazione grafica del sito web e lo sviluppo del sito web. Il tutto dovrebbe essere pronto in 1 mese dall'inizio dei lavori."
          size={1}
        />
        <Spacing height={48} />
        <Table 
          rows={[
            {
              text1: 'Design del sito',
              text2: '1-2 settimane',
              description: 'Il sito web sara progettato per presentare il catalogo dei prodotti, e le informazioni generali dell\'azienda.'
            },
            {
              text1: 'Sviluppo del sito',
              text2: '2-3 settimane',
              description: 'Il sito verrà svilippato con tecnologie moderne che permettono di avere un sito web veloce e moderno.'
            },
          ]}
          finalRows={[
            {
              text1: 'Tempo totale',
              text2: '3-5 settimane',
              description: ''
            },
          ]}
        />

        <Spacing height={128} />

        <Title 
          id='3'
          text="Gestione dei contenuti in autonomia"
          size={2}
        />
        <Spacing height={48} />
        <Paragraph 
          text="I contenuti del sito saranno gestiti con un software di gestione dei contenuti chiamato Contentful. È uno strumento gratuito e facile da far utilizzare anche da una persona non abituata ad usate questo tipo di strumenti. Con questo l'azienda portà modificare i pdf e le categorie di articoli presenti nel sito."
          size={1}
        />
        <Spacing height={48} />
        {/* <Citation 
          title='Nota sulle sezioni modificabili in autonomia:'
          description="Le sezioni modificabili in autonomia devono essere scelte in base alle neccessità del progetto e alla volontà del cliente. In questi casi si rendono modificabile i contenuti che possono cambiare nel tempo, non ogni piccolo dettaglio del sito, allo scopo di aumentare la semplicità di gestione per il cliente."
        /> */}
        <Spacing height={80} />
        <ProposalImage 
          src='/proposal/contentful.jpg'
          grid={1}
        />

        <Spacing height={128} />

        <Title 
          id='4'
          text="Tecnologie utilizzate"
          size={2}
        />
        <Spacing height={48} />
        <Paragraph 
          text="Utilizziamo le tecnologie di sviluppo che riteniamo migliori per ogni progetto, in modo da avere un sito web veloce, sicuro e affidabile. In questo caso il sito web sarà sviluppato con Next.js, un framework per lo sviluppo di siti web in React.js. Tutte le altre tecnologie sono elencate di seguito."
          size={1}
        />
        <Spacing height={48} />
        <Table 
          rows={[
            {
              text1: 'React',
              text2: 'Libreria frontend per la creazione di interfacce utente',
              description: '',
            },
            {
              text1: 'Next.js',
              text2: 'Framework di sviluppo per React.js',
              description: '',
            },
            {
              text1: 'Contenful',
              text2: 'Cms per la gestione dei contenuti',
              description: '',
            },
          ]}
        />

        <Spacing height={128} />

        <Title 
          id='5'
          text="Prezzo del progetto"
          size={2}
        />
        <Spacing height={48} />
        <Paragraph 
          text="Il prezzo del progetto è di 1.000 € iva esclusa. Il pagamento del progetto deve essere versato entro 30 giorni dalla messa online del sito web. Altri costi di gestione del sito (il dominio) sarà addebitati direttamente dal servizio all'azienda (Pharmisa) ad ogni rinnovo del dominio (1 volta all'anno)."
          size={1}
        />
        <Spacing height={48} />
        <Table 
          rows={[
            {
              text1: 'Sviluppo completo del sito',
              text2: '1000 €',
              description: '',
            },
            {
              text1: 'Canone di rinnovo dominio',
              text2: '20 € / anno',
              description: 'Che comprende la gestione del dominio',
            },
          ]}
        />
        <Spacing height={24} />
        <Paragraph 
          text="Tutti i prezzi sono da intendersi esclusi IVA. Il pagamento deve essere effettuato entro 30 giorni dalla messa online del sito web a meno che non sia stato concordato diversamente."
          size={3}
        />

        <Spacing height={128} />

        <Title 
          text="Overview"
          size={2}
        />
        <Spacing height={48} />
        <List 
          data={[
            <Fragment key={1}> <span className='font-medium'>Preparato per:</span> &nbsp; Pharmisa s.r.l. </Fragment>,
            <Fragment key={2}> <span className='font-medium'>Preparato da:</span> &nbsp; Pegaso Digital Studio </Fragment>,
            <Fragment key={3}> <span className='font-medium'>Costo totale del progetto:</span> &nbsp; 1000 € </Fragment>,
            <Fragment key={4}> <span className='font-medium'>Tempi totali di sviluppo:</span> &nbsp; 3/5 settimane </Fragment>,
            <Fragment key={5}> <span className='font-medium'>Servizi:</span> &nbsp; Web Design, Sviluppo web </Fragment>,
          ]}
          type='none'
        />

        <Spacing height={128} />
        
        <Title 
          id='6'
          text="Prossimi passi"
          size={2}
        />
        <Spacing height={48} />
        <List 
          data={[
            'Puoi confermare il progetto via email o telefono se sei pronto per iniziare.',
            'Partiremmo con la fase di design, dove ci troveremo per discutere delle modifiche necessarie.',
            'Quando ci saranno progressi nel progetto ci sentiremo via email o direttamente via telefono.',
          ]}
          type='ordered'
        />

        <Spacing height={80} />

        <ButtonGroup
          text1='Come confermare'
          text2='Contattaci'
          handleClick1={() => setConfirmModal(true)}
          href2='tel:3478741848'
        />

        <Spacing height={128} />

        <Title 
          id='7'
          text="Domande frequenti"
          size={2}
        />
        <Spacing height={48} />
        <Questions 
          data={[
            {
              question: 'Le modifiche sono incluse nel prezzo?',
              answer: 'Le piccole modifiche che non richiedono tempo sono incluse nel prezzo anche dopo la pubblicazione online del sito. Se ci dovessero essere modifiche più grandi dopo la messa online del sito, ti contatteremo per un preventivo.'
            },
            {
              question: 'Come posso pagare?',
              answer: 'Il pagamento verrà effetuato tramite bonifico bancario. Il pagamento del progetto deve essere versato entro 30 giorni dalla messa online del sito web.'
            },
            {
              question: 'Quali saranno i modi per comunicare durante il progetto?',
              answer: 'Comunicheremo via email, telefono e fisicamente al negozio Pegaso Informatica.'
            },
            {
              question: 'Dove ci si troverà per lo sviluppo del progetto?',
              answer: 'Ci troveremo al negozio Pegaso Informatica, in via Dante 56, 35014 Fontaniva (PD).'
            }
          ]}
        />

        {/* 
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
        /> */}

    </div>
  )
}
