import '@/styles/globals.css'
import { Inter  } from 'next/font/google'
import { Noto_Serif_Georgian } from 'next/font/google'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })
const georgia = Noto_Serif_Georgian({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
      .font-family-georgia{
        font-family: ${georgia.style.fontFamily};
      }
    `}</style>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </>
}
