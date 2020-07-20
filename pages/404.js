import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'

export default function ErrorPage() {
    return (
        <MainLayout 
            title={'Error 404'}
            description={'Description for Error 404 page'}
        >
            <h1>Error 404</h1>
            <p><Link href={'/'}><a>Go back to main</a></Link></p>
        </MainLayout>
    )
}