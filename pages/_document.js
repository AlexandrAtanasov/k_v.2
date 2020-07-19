import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html className="h-100">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
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