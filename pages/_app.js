// import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNprogress from 'nextjs-progressbar';

import Router from "next/router";
import withYM from "next-ym";

// import styles
import '../styles/main.scss'
import '../styles/global_colors.scss'

// tags
// import { YMInitializer } from 'react-yandex-metrika';

export default withYM("54928126", Router)(MyApp);

function MyApp({ Component, pageProps }) {
    
    return (
        <>
            {/* <YMInitializer accounts={[54928126]} options={{accurateTrackBounce: true}, {trackLinks: true}} /> */}
            <NextNprogress/>
            <Component {...pageProps} />
        </>
    )
}
  