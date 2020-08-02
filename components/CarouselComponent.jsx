import React from 'react'
import { Carousel } from 'react-bootstrap'

export function CarouselComponent() {

    const images = [
        {"id": 1, "src": "/img/main/carousel/img_1.png", "alt":"First", "h3":"First img", "p":"Est sit deserunt"},
        {"id": 2, "src": "/img/main/carousel/img_2.png", "alt":"Second", "h3":"Second img", "p":"Qui cillum nisi commodo"},
        {"id": 3, "src": "/img/main/carousel/img_3.png", "alt":"Fird", "h3":"Third img", "p":"Culpa et elit cupidatat"},
      ]    

    return (
        <Carousel>
            {images.map(img => {
                return (
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
    )
}