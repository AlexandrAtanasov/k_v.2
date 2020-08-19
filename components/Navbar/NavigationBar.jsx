import React, { useState } from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import { ModalContacts } from '../Modal_Contacts/Modal_Contacts'

import { server } from '../../config'
import { additional_menu, resolvable_menu } from '../../data/menu'
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import style from '../../styles/navigationbar.module.scss'

export function NavigationBar() {

    // scroll logic start
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 400;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    const shadowStyle = shouldShowShadow ? style.shadow : '';
    const hiddenStyle = shouldHideHeader ? style.hidden : '';
    // scroll logic end

    return (
        <>
            <Navbar 
                className={`${style.header} ${shadowStyle} ${hiddenStyle}`}
                expand="lg"
                fixed="top"
                // sticky="top"
            >
                <Link href={'/'} passHref>
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            // src={`${server}/img/main/navbar/logoooo.png`}
                            src={`/img/main/navbar/logoooo.png`}
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        KKK
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
                        
                        <NavDropdown title="Prices and Sales" id="basic-nav-dropdown">
                            <Link href={`/price`} passHref>
                                <NavDropdown.Item>
                                    Price
                                </NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link href={`/sales`} passHref>
                                <NavDropdown.Item>
                                    Sales
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

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

                        <NavDropdown title="Contacts" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <ModalCallback />
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <ModalContacts />
                            </NavDropdown.Item>
                        </NavDropdown>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}