import React, { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap'

export function ModalContacts() {

//   const [show_telNumbers, setShow_telNumbers] = useState(false);
//   const handleClose_telNumbers = () => setShow_telNumbers(false);
//   const handleShow_telNumbers = () => setShow_telNumbers(true);
  
  const handecall_call = () => window.open("tel:111","_self");
//   const handecall_callFirst = () => window.open("tel:111","_self");
//   const handecall_callSecond = () => window.open("tel:222","_self");
//   const handecall_callThird = () => window.open("tel:333","_self");

    return (
        <>
            <div 
                // onClick={handleShow_telNumbers}
                onClick={handecall_call}
                >
                Call to centers
            </div>

             {/* TODO: make call to single number  */}
            {/* <Modal 
                onHide={handleClose_telNumbers}
                show={show_telNumbers} 
            >
                <Modal.Header closeButton>
                <Modal.Title>Сenter numbers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button 
                        onClick={handecall_callFirst}
                        // as='a' 
                        // href='tel:111'
                        variant="success" 
                        size="lg" 
                        block 
                    >
                        Call on numder 111
                    </Button>
                    <Button 
                        onClick={handecall_callSecond}
                        // as='a' 
                        // href='tel:222' 
                        variant="success" 
                        size="lg" 
                        block 
                    >
                        Call on numder 222
                    </Button>
                    <Button 
                        onClick={handecall_callThird}
                        // as='a' 
                        // href='tel:888' 
                        variant="success" 
                        size="lg" 
                        block 
                    >
                        Call on numder 333
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose_telNumbers}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}