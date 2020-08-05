import React from 'react'
import { Carousel } from 'react-bootstrap'
import { carousel } from '../../data/main/carousel/main_carousel'

export function CarouselComponent() {

    return (
        <Carousel>
            {carousel.map(img => {
                return (
                    <Carousel.Item key={img.id}>
                        <img
                            className="d-block w-100"
                            src={`${img.src}`}
                            alt={img.alt}
                        />
                        <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <h3>{img.h3}</h3>
                            <p>{img.p}</p>
                        </Carousel.Caption>
                    </Carousel.Item>            
                )
            })}
        </Carousel>
    )
}