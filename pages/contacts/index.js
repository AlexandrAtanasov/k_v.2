import { Card, Button } from 'react-bootstrap'
import { MainLayout } from '../../layouts/MainLayout'
import { ModalCallback } from '../../components/Modal_Callback/Modal_Callback'
import { ModalContacts } from '../../components/Modal_Contacts/Modal_Contacts'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import ReactMarkdown from "react-markdown";

// import data
import { maps } from '../../data/maps/location_of_centers'

// import styles
import style from '../../styles/contacts_page.module.scss'


export default function LocationsPage() {
    return (
        <MainLayout
            title='How to find us'
            description='Description for locations page'
        >
            <HeadingComponent 
                heading='Locations and contacts Page'
            />
            {maps.map(elem => {
                return(
                    <Card key={elem.id}>
                        <Card.Header
                            className={` card_component_header `}
                        >
                            {elem.header}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {elem.title}
                            </Card.Title>
                            <ReactMarkdown
                                source={elem.text} 
                            />
                            <script type="text/javascript" charSet="utf-8" async src={`${elem.map}`}></script>
                        </Card.Body>

                        <div className={` ${style.div_for_button} `} >
                            <Button className="button_green_color" href="#callback">
                                <ModalCallback />
                            </Button>

                        </div>
                        <div className={` ${style.div_for_button} `}>
                            <Button className="button_green_color" href="#callToCenters">
                                <ModalContacts />
                            </Button>

                        </div>
                    </Card>
                )
            })}
        </MainLayout>
    )
} 