import React from 'react'
// import Link from 'next/link'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { OrderCallForm } from './OrderCallForm'

export function OrderCallButton() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {/* <Link href={'/order-call'} passHref>
            <a>
                <Button variant="success">
                    Call back!
                </Button>
            </a>
        </Link> */}

        <Button variant="success" onClick={handleShow}>
            Call back!
        </Button>

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
        </>
    )
}