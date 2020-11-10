import { useState, useEffect } from 'react'
import { 
    Row,
    Col,
    Tab,
    Nav,
    Button,
    Card
} from 'react-bootstrap'
import { MainLayout } from '../../layouts/MainLayout'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import { ModalCallback } from '../../components/Modal_Callback/Modal_Callback'
import { ModalContacts } from '../../components/Modal_Contacts/Modal_Contacts'
import ReactMarkdown from "react-markdown";

// import loadMaps from '../../data/pages/contacts/maps';

// import styles
import style from '../../styles/pages/contacts_page.module.scss'

// import data
import { contacts } from '../../data/pages/contacts/contacts'

export default function LocationsPage() {

    // const [loaded, setLoaded] = useState(false);
    // useEffect(() => {
    //     loadMaps(() => {
    //         setLoaded(true);
    //     });
    // });

    // TODO: REFACTOR THIS SHIT! tommorow...
    return (
        <MainLayout
            title='Как нас найти'
            description='Адреса центров Кинезис в Перми'
        >
            <HeadingComponent 
                heading='Как нас найти'
            />
            <Tab.Container id="persons_cards" defaultActiveKey="1" >
                
                <Row 
                    className={` ${style.margin} justify-content-md-center`}
                >
                    <Nav variant="pills">
                        {
                            contacts.map( elem => {
                                return (
                                    <Col lg='auto' key={elem.id}>
                                        <Nav.Item>
                                            <Nav.Link eventKey={elem.id} className={style.button_outline_none}>
                                                {elem.header}
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                )
                            })
                        }
                    </Nav>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <Tab.Content>
                            
                            <Tab.Pane eventKey={contacts[0].id} key={contacts[0].id}>
                                <Card id="card_contacts">
                                    <Card.Body>
                                        <Card.Title>
                                            {contacts[0].title}
                                        </Card.Title>
                                        {/* <ReactMarkdown
                                            source={contacts[0].text} 
                                        /> */}
                                    </Card.Body>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A95a8d88c04c44184a9ee71ef86a61c6658c142efe7b57e5a0d8b35955ce599c5&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                                </Card>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey={contacts[1].id} key={contacts[1].id}>
                                <Card id="card_contacts">
                                    <Card.Body>
                                        <Card.Title>
                                            {contacts[1].title}
                                        </Card.Title>
                                        {/* <ReactMarkdown
                                            source={contacts[1].text} 
                                        /> */}
                                    </Card.Body>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adea7629fc5a568c12339c0e2450a4e623a1d4591b22ac43c66f3198bbf948990&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                                </Card>
                            </Tab.Pane>

                            <Tab.Pane eventKey={contacts[2].id} key={contacts[2].id}>
                                <Card id="card_contacts">
                                    <Card.Body>
                                        <Card.Title>
                                            {contacts[2].title}
                                        </Card.Title>
                                        {/* <ReactMarkdown
                                            source={contacts[2].text} 
                                        /> */}
                                    </Card.Body>
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7e2b36bc87df5c5ddcab1036a5def55fa532335f6506744aa4dd575dba36fcc5&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
                                </Card>
                            </Tab.Pane>

                        </Tab.Content>

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
                        
                    </Col>
                </Row>
                
            </Tab.Container>
        </MainLayout>
    )
} 