import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivitiesComponent } from '../components/Main/MainActivitiesComponent'
import { MainDoctorsComponent } from '../components/Main/MainDoctorsComponent'
import { MainLicensesComponent } from '../components/Main/MainLicensesComponent'
import { CardComponentImg } from '../components/CardComponents/CardComponentImg'
import { HeadingComponent } from '../components/Heading/HeadingComponent'
import { MainCentersComponent } from '../components/Main/MainCentersComponent'

// import data
import { carousel } from '../data/main/carousel/main_carousel'
import { authors_column } from '../data/pages/authors_column/authors_column'

export default function HomePage() {
  
  return (
    <MainLayout
      title='Кинезис'
      description='Кинезис - кинезитерапия в Перми'
    >
      <CarouselComponent
        data={carousel}
      />
      <MainActivitiesComponent />
      <HeadingComponent 
        heading='Авторская колонка'
      />
      <CardComponentImg 
        cardTitle={authors_column[0].title}
        cardText={authors_column[0].text}
        cardImg={authors_column[0].img}
      />
      <HeadingComponent 
        heading='Our Centers'
      />
      <MainCentersComponent/>
      <HeadingComponent 
        heading='Our Doctors'
      />
      <MainDoctorsComponent />
      <HeadingComponent 
        heading='Our Licenses'
      />
      <MainLicensesComponent/>
     </MainLayout>
  )
}