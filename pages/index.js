import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivitiesComponent } from '../components/Main/MainActivitiesComponent'
import { MainDoctorsComponent } from '../components/Main/MainDoctorsComponent'
import { MainLicensesComponent } from '../components/Main/MainLicensesComponent'
import { CardComponentImg } from '../components/CardComponents/CardComponentImg'
import { HeadingComponent } from '../components/Heading/HeadingComponent'
import { MainCentersComponent } from '../components/Main/MainCentersComponent'
import { MainStartIntro } from '../components/Main/MainStartIntro'

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
        heading='С чего начать?'
      />
      <MainStartIntro />
      <HeadingComponent 
        heading='Наши центры'
      />
      <MainCentersComponent/>
      <HeadingComponent 
        heading='Наши доктора'
      />
      <MainDoctorsComponent />
      <HeadingComponent 
        heading='Лицензции и заключения'
      />
      <MainLicensesComponent/>
     </MainLayout>
  )
}