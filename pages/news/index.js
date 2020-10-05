import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentSocialLinks } from '../../components/CardComponents/CardComponentSocialLinks'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { news }  from '../../data/pages/news/news'

export default function NewsPage() {
    return (
        <MainLayout
            title='News page'
            description='Description for News page'
        >
            <HeadingComponent 
                heading='News Page'
            />
            <CardComponentSocialLinks
                cardTitle={news[0].title}
                cardText={news[0].text}
            />
        </MainLayout>
    )
}  