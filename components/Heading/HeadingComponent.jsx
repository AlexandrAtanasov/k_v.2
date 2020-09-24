import React from 'react'
import { Container } from 'react-bootstrap'

// import styles 
import style from '../../styles/components/HeadingComponent.module.scss'

export function HeadingComponent( { heading } ) {
    return (
        <Container style={{textAlign:'center'}}>
            <h1
                className={` ${style.heading_uppercase} `}
            >
                { heading }
            </h1>
        </Container>
    )
}