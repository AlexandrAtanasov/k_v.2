// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNprogress from 'nextjs-progressbar';

// import styles
import '../styles/main.scss'
import '../styles/global_colors.scss'


export default function MyApp({ Component, pageProps }) {
    return (
        <>
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
  