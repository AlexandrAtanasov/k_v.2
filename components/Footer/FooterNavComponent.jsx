import React from 'react'
import Link from 'next/link'
import { Nav } from 'react-bootstrap'

// import style
import style from '../../styles/components/footer/FooterNavComponent.module.scss'

// import localization data
import { local } from '../../data/localization_data/components/Footer/FooterNavComponent'

export function FooterNavComponent() {
    return (
        <Nav 
            // className="justify-content-md-center"
            className={` ${style.footer_nav_component_display} ${style.footer_nav_component_margin} `}    
        >
            <Link href={` ${local.link_first.link} `} passHref>
                <Nav.Link>
                    {local.link_first.text}
                </Nav.Link>
            </Link>
            <Link href={` ${local.link_second.link} `} passHref>
                <Nav.Link>
                    {local.link_second.text}
                </Nav.Link>
            </Link>
        </Nav>
    )
}