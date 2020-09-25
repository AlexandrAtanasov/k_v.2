import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivitiesComponent } from '../components/Main/MainActivitiesComponent'
import { MainDoctorsComponent } from '../components/Main/MainDoctorsComponent'
import { MainLicensesComponent } from '../components/Main/MainLicensesComponent'
import { CardComponentImg } from '../components/CardComponents/CardComponentImg'
import { HeadingComponent } from '../components/Heading/HeadingComponent'

// import data
import { carousel } from '../../data/main/carousel/main_carousel'
import { authors_column } from '../data/authors_column/authors_column'

export default function HomePage() {
  
  return (
    <MainLayout
      title='Main page'
      description='Description for Main page'
    >
      <CarouselComponent />
      <MainActivitiesComponent />
      <HeadingComponent 
        heading='Authors column'
      />
      <CardComponentImg 
        cardTitle={authors_column[0].title}
        cardText={authors_column[0].text}
        cardImg={authors_column[0].img}
      />
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