import Document, { Html, Head, Main, NextScript } from 'next/document'

// tags
import { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

class MyDocument extends Document {
  
  render() {

    ReactGA.initialize('263380978');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <Html className="h-100">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
            <script src="//code.jivosite.com/widget.js" data-jv-id="j5UxZwUNyF" async></script>

            <YMInitializer accounts={[54542998]} />

        </Head>
        <body className="h-100">
          <Main>

          </Main>
          <NextScript />


        </body>
      </Html>
    )
  }
}

export default MyDocument