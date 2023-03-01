import { Html, Head, Main, NextScript } from 'next/document'
import { Provider } from 'react-wrap-balancer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Provider>
          <Main />
          <NextScript />
        </Provider>
      </body>
    </Html>
  )
}
