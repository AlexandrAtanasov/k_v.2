import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivitiesComponent } from '../components/Main/MainActivitiesComponent'
import { MainDoctorsComponent } from '../components/Main/MainDoctorsComponent'
import { MainLicensesComponent } from '../components/Main/MainLicensesComponent'

export default function HomePage() {
  
  return (
    <MainLayout
      title='Main page'
      description='Description for Main page'
    >
      <CarouselComponent />
      <MainActivitiesComponent />
      <MainDoctorsComponent />
      <MainLicensesComponent />

      
    </MainLayout>
  )
}