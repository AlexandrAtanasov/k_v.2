import React from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import classes from '../styles/navigationbar.module.scss'

export function NavigationBar() {
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
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <Link href={'/contacts'} passHref>
                            <NavDropdown.Item>
                                Contacts
                            </NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/sales'} passHref>
                            <NavDropdown.Item>
                                Sales
                            </NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}