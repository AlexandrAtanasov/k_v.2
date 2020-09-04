import { Card, Button } from 'react-bootstrap'
import { MainLayout } from '../../layouts/MainLayout'

// import Components
import { ModalCallback } from '../../components/Modal_Callback/Modal_Callback'
import { ModalContacts } from '../../components/Modal_Contacts/Modal_Contacts'

import { maps } from '../../data/maps/location_of_centers'

import style from '../../styles/contacts_page.module.scss'


export default function LocationsPage() {
    return (
        <MainLayout
            title='How to find us'
            description='Description for locations page'
        >
            {maps.map(elem => {
                return(
                    <Card key={elem.id}>
                        <Card.Header>
                            {elem.header}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {elem.title}
                            </Card.Title>
                            <Card.Text>
                                {elem.text}
                            </Card.Text>
                            <script type="text/javascript" charSet="utf-8" async src={`${elem.map}`}></script>
                        </Card.Body>

                        <div className={` ${style.div_for_button} `} >
                            <Button variant="success">
                                <ModalCallback />
                            </Button>

                        </div>
                        <div className={` ${style.div_for_button} `}>
                            <Button variant="success">
                                <ModalContacts />
                            </Button>

                        </div>
                    </Card>
                )
            })}
        </MainLayout>
    )
} 