import React from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'

import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import { ModalContacts } from '../Modal_Contacts/Modal_Contacts'

export function FooterContacts() {
    return (
        <Container>
            <form>
                <legend>Our contacts:</legend>
                <ButtonGroup aria-label="Basic example" size="md">
                    <Button variant="secondary">
                        <ModalCallback />
                    </Button>
                    <Button variant="secondary">
                        <ModalContacts />
                    </Button>
                </ButtonGroup>
            </form>
        </Container>
    )
}