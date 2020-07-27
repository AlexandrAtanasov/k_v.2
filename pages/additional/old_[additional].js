import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'
import { useRouter } from 'next/router'

export default function AdditionalPage() {

    const router = useRouter()
    const pageId  = router.query.additional

    return (
        <MainLayout
            title={pageId}
            description={`Description for ${pageId} page`}
        >
            <CardComponent
                cardHeader={`Header for ${pageId}`}
                cardTitle={`Title for ${pageId}`}
                cardText={`Text for ${pageId}. Minim anim cillum dolor dolore est aliquip.`}
            />
        </MainLayout>
    )
}  