import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentSocialLinks } from '../../components/CardComponents/CardComponentSocialLinks'
// import data
import { news }  from '../../data/news/news'

export default function NewsPage() {
    return (
        <MainLayout
            title='News page'
            description='Description for News page'
        >
            <CardComponentSocialLinks
                cardHeader={news[0].header}
                cardTitle={news[0].title}
                cardText={news[0].text}
            />
        </MainLayout>
    )
}  