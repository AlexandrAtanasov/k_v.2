// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNprogress from 'nextjs-progressbar';

// import styles
import '../styles/main.scss'
import '../styles/global_colors.scss'

// tags
import { YMInitializer } from 'react-yandex-metrika';

export default function MyApp({ Component, pageProps }) {
    
    return (
        <>
            <YMInitializer accounts={[54542998]} />
            <NextNprogress/>
            <Component {...pageProps} />
        </>
    )
}
  