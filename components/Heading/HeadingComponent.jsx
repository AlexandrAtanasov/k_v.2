import React from 'react'
import { Container } from 'react-bootstrap'

// import styles 
import style from '../../styles/components/HeadingComponent.module.scss'

export function HeadingComponent( { heading } ) {
    return (
        <Container className={` ${style.heading_container} `}>
            <h1
                className={` ${style.heading} `}
            >
                { heading }
            </h1>
        </Container>
    )
}