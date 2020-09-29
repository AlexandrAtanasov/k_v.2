import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import OrderCallForm  from './Form_Callback'
import ReactMarkdown from "react-markdown";

// import data
import { personal_data_policy } from '../../data/personal_data_policy/personal_data_policy'

export function ModalCallback() {

    const [show_callback, setShow_callback] = useState(false);
    const handleClose_callback = () => setShow_callback(false);
    const handleShow_callback = () => setShow_callback(true);
    const handleU_callback = () => console.log('Understood');

    return (
        <>
          <div onClick={handleShow_callback}>Order call</div>

          <Modal
            onHide={handleClose_callback}
            show={show_callback}
            keyboard={false}
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Callback form
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <OrderCallForm />
            </Modal.Body>
            <Modal.Footer>
              {/* <Button 
                onClick={handleClose_callback}
                variant="secondary" 
              >
                Close
              </Button>
              <Button onClick={handleU_callback} variant="success">Understood</Button> */}
              <ReactMarkdown
                source={personal_data_policy[0].text} 
              />
            </Modal.Footer>
          </Modal>
        </>
    )
}