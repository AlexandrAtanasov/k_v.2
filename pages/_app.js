// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNprogress from 'nextjs-progressbar';

// import styles
import '../styles/main.scss'
import '../styles/global_colors.scss'

// tags
import { YMInitializer } from 'react-yandex-metrika';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';


export default function MyApp({ Component, pageProps }) {
    
    // google analytics
    ReactGA.initialize('263380978');
    // facebook pixel
    ReactPixel.init('2609870085929044', advancedMatching, options);
    ReactPixel.pageView();
    
    return (
        <>
            <YMInitializer accounts={[54542998]} />

            <NextNprogress
                // color="#29D"
                // startPosition="1"
                // stopDelayMs="100"
                // height="3"
            />

            <Component {...pageProps} />
        </>
    )
}
  