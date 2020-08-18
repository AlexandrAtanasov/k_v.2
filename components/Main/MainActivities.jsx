import React from 'react'
import { CardDeck, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { activities } from '../../data/main/activities/main_actvities'

import style from '../../styles/main_activities.module.scss'

export function MainActivities() {
    return (
        <>
            <div 
                className={`
                    ${style.activities_column_container} 
                    backgroundColor_darkgreen
                `}
            >
                <p
                    className={`
                        h1
                        ${style.activities_elem_text}
                    `}
                >
                    What we do
                </p>
                <div
                    className={`
                        ${style.activities_row_container}
                    `}
                >
                {activities.map(elem => {
                    return (
                        <div 
                            key={elem.id}
                            className={`
                                ${style.activities_elem_container}
                                justify-content-center
                            `} 
                        >
                            <Image 
                                fluid 
                                className={`
                                    ${style.activities_elem_img}
                                `}
                                src={elem.img} 
                            />
                            <br/>
                            <span
                                className={`
                                    ${style.activities_elem_text}
                                `}
                            >
                                {elem.text}
                            </span>
                        </div>

                    )
                })}
                </div>
            </div>
        </>
    )

}