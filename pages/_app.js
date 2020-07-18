// import App from 'next/app'
// import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
  