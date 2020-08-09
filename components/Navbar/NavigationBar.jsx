import React, { useState } from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { OrderCallButton } from '../OrderCallButtonAndModal'
// import classes from '../../styles/navigationbar.module.scss'
import { additional_menu, resolvable_menu } from '../../data/menu'
import { server } from '../../config'

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

export function NavigationBar() {

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
  
    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
    <>
        <Navbar 
            // className={classes.color}
            className={`header ${shadowStyle} ${hiddenStyle}`}
            expand="lg"
            fixed="top"
            // sticky="top"
        >
            <Link href={'/'} passHref>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={`${server}/img/main/navbar/logoooo.png`}
                        width="auto"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Кинезис
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
        <style jsx global>
            {`
            .header {
                // position: fixed;
                // top: 0;
                // left: 0;
                // display: flex;
                // align-items: center;
                // justify-content: space-between;
                // width: 100%;
                // height: 86px;
                // background-color: rgba(0, 0, 0, 0.0);
                // background-color: darkgreen;
                // color: #333;
                transform: translateY(0);
                transition: transform 0.3s ease;
              }
              .header:hover,
              .header:active {
                background-color: #fff;
              }
              
              .header.shadow {
                background-color: #fff;
                transition: background-color 0.5s ease;
                box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
              }
              
              .header.hidden {
                transform: translateY(-110%)!important;
              }
            `}
        </style>
    </>
    )
}