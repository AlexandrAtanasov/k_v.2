import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CarouselComponent } from '../components/CarouselComponent'

export default function HomePage() {
  
  const images = [
    {"id": 1, "src": "/img/carousel/img_1.png", "alt":"First", "h3":"First img", "p":"Est sit deserunt"},
    {"id": 2, "src": "/img/carousel/img_2.png", "alt":"Second", "h3":"Second img", "p":"Qui cillum nisi commodo"},
    {"id": 3, "src": "/img/carousel/img_3.png", "alt":"Fird", "h3":"Third img", "p":"Culpa et elit cupidatat"},
  ]

  return (
    <MainLayout
      title='Main page'
      description='Description for Main page'
    >
      <h1>Main page</h1>
      <CarouselComponent />
      
    </MainLayout>
  )
}