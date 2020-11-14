import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentSocialLinks } from '../../components/CardComponents/CardComponentSocialLinks'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { news }  from '../../data/pages/news/news'

export default function NewsPage() {
    return (
        <MainLayout
            title='Новости'
            description='Новости сети центров кинезитерапии Кинезис'
        >
            <HeadingComponent 
                heading='Новости'
            />
            <CardComponentSocialLinks
                cardTitle={news[0].title}
                cardText={news[0].text}
            />
        </MainLayout>
    )
}  