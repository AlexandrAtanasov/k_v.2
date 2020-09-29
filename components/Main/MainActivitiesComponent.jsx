import React from 'react'
import Link from 'next/link'
import { activities } from '../../data/main/activities/main_actvities'
import { HeadingComponent } from '../Heading/HeadingComponent'
import { CardDeck, Card, Container, Row, Col, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap'

// import styles
import style from '../../styles/main_activities.module.scss'

export function MainActivitiesComponent() {
    return (
        <div className={` ${style.activities_column_container} backgroundColor_darkgreen `} >
            <div style={{color: 'white'}}>
                <HeadingComponent 
                    heading='What we do'
                />
            </div>
            {/* TODO: make navigation */}
            <div className={` ${style.activities_row_container} `} >
                {activities.map(elem => {
                    return (
                        <div >
                            <div
                                key={elem.id} 
                                className={` ${style.activities_elem_container} justify-content-center`} 
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}