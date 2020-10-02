import React from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'

import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import { ModalContacts } from '../Modal_Contacts/Modal_Contacts'

// import styles
import style from '../../styles/components/footer/FooterContactsComponent.module.scss'


// import localization data
import { local } from '../../data/localization_data/components/Footer/FooterContactsComponent'

export function FooterContactsComponent() {
    return (
        <Container>
            <form>
                <legend>{local.form_title}</legend>
                <ButtonGroup 
                    aria-label="Basic example" 
                    size="md"
                    className={`footer_contacts_color ${style.footer_contacts_border}`}
                >
                    <Button
                        className="footer_contacts_color"
                    >
                        <ModalCallback />
                    </Button>
                    <Button
                        className="footer_contacts_color"
                    >
                        <ModalContacts />
                    </Button>
                </ButtonGroup>
            </form>
        </Container>
    )
}