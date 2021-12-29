import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivitiesComponent } from '../components/Main/MainActivitiesComponent'
import { MainAdvantages } from '../components/Main/MainAdvantages'
import { MainDoctorsComponent } from '../components/Main/MainDoctorsComponent'
import { MainLicensesComponent } from '../components/Main/MainLicensesComponent'
import { HeadingComponent } from '../components/Heading/HeadingComponent'
import { MainCentersComponent } from '../components/Main/MainCentersComponent'
import { MainStartIntro } from '../components/Main/MainStartIntro'
import { MainVideo } from '../components/Main/MainVideo'

// import data
import { carousel } from '../data/main/carousel/main_carousel'

export default function HomePage() {
  
  return (
    <MainLayout
      title='Кинезис'
      description='Кинезис - кинезитерапия в Перми'
      >
      <MainVideo/>
      <CarouselComponent
        data={carousel}
      />
      <MainActivitiesComponent />
      <HeadingComponent 
        heading='С чего начать?'
      />
      <MainStartIntro />
      <MainAdvantages />
      <HeadingComponent 
        heading='Наши центры'
      />
      <MainCentersComponent/>
      <HeadingComponent 
        heading='Наши врачи'
      />
      <MainDoctorsComponent />
      <HeadingComponent 
        heading='Лицензции и заключения'
      />
      <MainLicensesComponent/>
     </MainLayout>
  )
}