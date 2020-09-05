import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/Main/CarouselComponent'
import { MainActivities } from '../components/Main/MainActivities'
import { LicencesComponent } from '../components/LicencesComponent'

export default function HomePage() {
  
  return (
    <MainLayout
      title='Main page'
      description='Description for Main page'
    >
      <CarouselComponent />
      <MainActivities />
      <LicencesComponent />

      
    </MainLayout>
  )
}