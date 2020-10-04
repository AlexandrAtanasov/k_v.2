import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentImg } from '../../components/CardComponents/CardComponentImg'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { authors_column } from '../../data/authors_column/authors_column'
import local from '../../data/localization_data/pages/sale of exercise equipment/sale_of_exercise_equipment'

export default function SaleOfExerciseEquipment() {
    return (
        <MainLayout
            title={local.main_layout_title}
            description='Description for sales of exercise equipment page'
        >
            <HeadingComponent 
                heading='Sale of exercise equipment Page'
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