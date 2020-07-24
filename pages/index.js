import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { Carousel } from 'react-bootstrap'

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
      <Carousel>
        {images.map(img => {
          return(
            <Carousel.Item key={img.id}>
              <img
                className="d-block w-100"
                src={`${img.src}`}
                alt={img.alt}
              />
              <Carousel.Caption>
                <h3>{img.h3}</h3>
                <p>{img.p}</p>
              </Carousel.Caption>
            </Carousel.Item>            
          )
        })}
      </Carousel>
    </MainLayout>
  )
}