import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { authors_column } from '../../data/pages/authors_column/authors_column'

export default function AuthorsPage() {
    return (
        <MainLayout
            title='Авторская колонка'
            description='Авторская колонка основателя сети центров кинезитерапии Кинезис Эльвиры Некрасовой'
        >
            <HeadingComponent 
                heading='Авторская колонка'
            />
            {
                authors_column.map( elem => {
                    return (
                        <CardComponentWithoutHeader 
                            key={elem.id}
                            cardTitle={elem.title}
                            cardText={elem.text}
                            cardImg={elem.img}
                    />
                    )
                })
            }
        </MainLayout>
    )
}  