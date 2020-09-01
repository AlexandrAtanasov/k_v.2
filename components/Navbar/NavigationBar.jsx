import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import { ModalContacts } from '../Modal_Contacts/Modal_Contacts'

// import { server } from '../../config'
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

    // TODO: make some storage for menu  

    const additional_menu = [
        { id: 1, pid: 'Et-nostrud-ullamco-nulla' },
        { id: 2, pid: 'Mollit-voluptate-voluptate' },
        { id: 3, pid: 'Nostrud-duis-veniam-non-ipsum' }
    ]
    const resolvable_menu = [
        { id: 1, pid: 'In-laborum-tempor' },
        { id: 2, pid: 'Culpa-consequat-culpa' },
        { id: 3, pid: 'Elit-qui-officia-tempor-quis' }
    ]

    // close dropdown by click outside. start
    const node = useRef();
    
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        document.getElementById("basic-navbar-nav-button").click();
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    // close dropdown by click outside. end


    return (
        <>
            <Navbar
                collapseOnSelect
                className={`${style.header} ${shadowStyle} ${hiddenStyle}`}
                expand="lg"
                fixed="top"
                // sticky="top"
                ref={node}
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
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    id="basic-navbar-nav-button"
                />
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
                                        <Link href={`/additional/[pid]`} as={`/additional/${menu.pid}`} passHref>
                                            <NavDropdown.Item>
                                                {menu.pid}
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
                                        <Link href={`/resolvable/[pid]`} as={`/resolvable/${menu.pid}`} passHref>
                                            <NavDropdown.Item>
                                                {menu.pid}
                                            </NavDropdown.Item>
                                        </Link>
                                        <NavDropdown.Divider />
                                    </div>
                                )
                            })}
                        </NavDropdown>

                        <NavDropdown title="Contacts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#callback"> 
                                <ModalCallback />
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#contactsList">
                                <ModalContacts />
                            </NavDropdown.Item>
                        </NavDropdown>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}