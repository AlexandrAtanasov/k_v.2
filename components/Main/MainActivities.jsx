import React from 'react'
import { CardDeck, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { activities } from '../../data/main/activities/main_actvities'

import style from '../../styles/main_activities.module.scss'

export function MainActivities() {
    return (
        <>
            <div 
                className={`
                    ${style.mainActivities_container} 
                    backgroundColor_darkgreen
                `}
            >
                <p style={{ color:"white" }} class="h1" >What we do</p>
                <div
                    style={{ 
                        display: "flex", 
                        flexDirection:"row", 
                        flexWrap: "wrap", 
                        textAlign: "center", 
                        justifyContent: "space-around", 
                    }} 
                >
                {activities.map(elem => {
                    return (
                        <div 
                            key={elem.id}
                            className="justify-content-center" 
                            style={{ 
                                display: "inline-block", 
                                margin: "0.2rem"
                            }}
                        >
                            <Image 
                                fluid 
                                style={{maxHeight: "5rem", filter: "invert(1)"}} 
                                src={elem.img} 
                            />
                            <br/>
                            <span
                                style={{ color:"white" }}
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