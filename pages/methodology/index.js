import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentImg } from '../../components/CardComponents/CardComponentImg'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { authors_column } from '../../data/authors_column/authors_column'

export default function AuthorsPage() {
    return (
        <MainLayout
            title='Authors page'
            description='Description for Authors page'
        >
            <HeadingComponent 
                heading='Authors / Methodology Page'
            />
            {
                authors_column.map( elem => {
                    return (
                        <CardComponentImg 
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