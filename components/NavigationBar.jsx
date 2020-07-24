import React from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import classes from '../styles/navigationbar.module.scss'

export function NavigationBar() {

    const menu_additional = [
        {"id": 1, "text": "Et nostrud ullamco", "link": "Et-nostrud-ullamco-nulla"},
        {"id": 2, "text": "Mollit voluptate voluptate", "link": "Mollit-voluptate-voluptate"},
        {"id": 3, "text": "Nostrud duis veniam non ipsum", "link": "Nostrud-duis-veniam-non-ipsum"},
        {"id": 4, "text": "Deserunt aliquip voluptate", "link": "Deserunt-aliquip-voluptate"},
        {"id": 5, "text": "Anim fugiat minim nulla sint duis", "link": "Anim-fugiat-minim-nulla-sint-duis"}
    ];

    const menu_resolvable = [
        {"id": 1, "text": "Est sit deserunt"},
        {"id": 2, "text": "Dolore magna consequat"},
        {"id": 3, "text": "Fugiat dolor pariatur"},
        {"id": 4, "text": "Eiusmod aliqua minim"},
        {"id": 5, "text": "Reprehenderit sint officia"}
    ]

    return (
        <Navbar 
            className={classes.color} 
            expand="lg"
        >
            <Link href={'/'} passHref>
                <Navbar.Brand href="#home">
                    k_v.2
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={'/'} passHref>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </Link>
                    <Link href={'/basicpage'} passHref>
                        <Nav.Link>
                            Basic
                        </Nav.Link>
                    </Link>
                    <Link href={'/price'} passHref>
                        <Nav.Link>
                            Price
                        </Nav.Link>
                    </Link>
                    <Link href={'/sales'} passHref>
                        <Nav.Link>
                            Sales
                        </Nav.Link>
                    </Link>

                    <NavDropdown title="Additional" id="basic-nav-dropdown">
                        {menu_additional.map(menu => {
                            return(
                                <div key={menu.id}>
                                    <Link href={`/additional/[additional]`} as={`/additional/${menu.link}`} passHref>
                                        <NavDropdown.Item>
                                            {menu.text}
                                        </NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Divider />
                                </div>
                            )
                        })}
                    </NavDropdown>

                    <NavDropdown title="Resolvable" id="basic-nav-dropdown">
                        {menu_resolvable.map(menu => {
                            return(
                                <div key={menu.id}>
                                    <Link href={`/resolvable/[resolvable]`} as={`/resolvable/${menu.text}`} passHref>
                                        <NavDropdown.Item>
                                            {menu.text}
                                        </NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Divider />
                                </div>
                            )
                        })}
                    </NavDropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}