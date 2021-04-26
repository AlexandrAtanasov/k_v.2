import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../components/FacebookPixel/fpixel'

class MyDocument extends Document {
  
  render() {

    return (
      <Html className="h-100" lang="ru">
        <Head>
          <meta charset="UTF-8"/> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
          <script src="//code.jivosite.com/widget.js" data-jv-id="j5UxZwUNyF" async></script>
                
            {/* Global Site Code Pixel - Facebook Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', ${FB_PIXEL_ID});
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
        
        
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