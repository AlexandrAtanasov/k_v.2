import React from 'react'
import { Carousel } from 'react-bootstrap'

// import styles
import style from '../../styles/components/Carousel.module.scss'

export function CarouselComponent( {data} ) {

    return (
        <Carousel style={{marginTop: '-56px'}}>
            {data.map(img => {
                return (
                    <Carousel.Item key={img.id}>
                        <img
                            className="d-block w-100"
                            src={`${img.src}`}
                            alt={img.alt}
                        />
                        <Carousel.Caption className="d-flex flex-column h-100 align-items-center justify-content-center">
                            <h3
                                className={` ${style.h3_background} `}
                            >
                                {img.h3}
                            </h3>
                            <p
                                className={` ${style.p_background} `}
                            >
                                {img.p}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>            
                )
            })}
        </Carousel>
    )
}