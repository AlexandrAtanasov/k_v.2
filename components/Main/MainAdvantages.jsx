import React from 'react'
import Link from 'next/link'
import { HeadingComponent } from '../Heading/HeadingComponent'
import { CardDeck, Card, Container, Row, Col, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'

// import styles
import style from '../../styles/main_activities.module.scss'

// import data
import { advantages } from '../../data/main/advantages/main_advantages'


//  TODO: make component for advantages and activities
export function MainAdvantages() {
    return (
        <div className={` ${style.activities_column_container} backgroundColor_darkgreen `} >
            <div style={{color: 'white'}}>
                <HeadingComponent 
                    heading='Наши преимущества'
                />
            </div>
            {/* TODO: make navigation (or not)*/}
            <div className={` ${style.activities_row_container} `} >
                {advantages.map(elem => {
                    return (
                        <div
                            key={elem.id} 
                            className={` ${style.activities_elem_container} ${style.advantages_elem_width} justify-content-center`} 
                        >
                                <Image 
                                    fluid 
                                    className={` ${style.activities_elem_img} `}
                                    src={elem.img} 
                                />
                                <br/>
                                <span className={` ${style.activities_elem_text} `} >
                                    {elem.text}
                                </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}