import React from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { OrderCallButton } from '../components/OrderCallButtonAndModal'
import classes from '../styles/navigationbar.module.scss'
import { additional_menu, resolvable_menu } from '../data/menu'

export function NavigationBar() {

    return (
        <Navbar 
            className={classes.color} 
            expand="lg"
            sticky="top"
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

                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <Link href={`/persons`} passHref>
                            <NavDropdown.Item>
                                Persons
                            </NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                    </NavDropdown>

                    <NavDropdown title="Additional" id="basic-nav-dropdown">
                        {additional_menu.map(menu => {
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
                        {resolvable_menu.map(menu => {
                            return(
                                <div key={menu.id}>
                                    <Link href={`/resolvable/[resolvable]`} as={`/resolvable/${menu.link}`} passHref>
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
            <OrderCallButton />
        </Navbar>
    )
}