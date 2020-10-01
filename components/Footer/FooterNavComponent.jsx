import React from 'react'
import Link from 'next/link'
import { Nav } from 'react-bootstrap'

// import style
import style from '../../styles/components/footer/FooterNavComponent.module.scss'

export function FooterNavComponent() {
    return (
        <Nav 
            // className="justify-content-md-center"
            className={` ${style.footer_nav_component_display} ${style.footer_nav_component_margin} `}    
        >
            <Link href={'#sitemap'} passHref>
                <Nav.Link>
                    Sitemap
                </Nav.Link>
            </Link>
            <Link href={'#other_info'} passHref>
                <Nav.Link>
                    Other information
                </Nav.Link>
            </Link>
        </Nav>
    )
}