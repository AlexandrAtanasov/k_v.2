import React, { useState } from 'react'
import Link from 'next/link'
import { Nav, NavDropdown, Navbar, Modal, Button } from 'react-bootstrap'

import { OrderCallForm } from '../OrderCallForm'
// import { OrderCallButton } from '../OrderCallButtonAndModal'

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

    //modal window start
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal window end

    //modal_num window start TODO:rewrite!
    const [show_num, setShow_num] = useState(false);
    const handleClose_num = () => setShow_num(false);
    const handleShow_num = () => setShow_num(true);
    //modal window end


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

                    <NavDropdown title="Contacts" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={handleShow}>
                            Call me back!
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleShow_num}>
                            Call on this number
                        </NavDropdown.Item>
                    </NavDropdown>


                </Nav>
            </Navbar.Collapse>

            {/* <OrderCallButton /> */}

        </Navbar>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderCallForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>

        TODO:rewrite!
        <Modal show={show_num} onHide={handleClose_num}>
            <Modal.Header closeButton>
            <Modal.Title>Сenter numbers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button as='a' href='tel:666' variant="primary" size="lg" block>
                    Call on numder 666
                </Button>
                <Button as='a' href='tel:777' variant="primary" size="lg" block>
                    Call on numder 777
                </Button>
                <Button as='a' href='tel:888' variant="primary" size="lg" block>
                    Call on numder 888
                </Button>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose_num}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}