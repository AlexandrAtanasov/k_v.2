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

// import styles
import style from '../../styles/pages/contacts_page.module.scss'

// import data
import { contacts } from '../../data/pages/contacts/contacts'

export default function LocationsPage() {
    return (
        <MainLayout
            title='Centers contacts page'
            description='Description for Centers contacts page'
        >
            <HeadingComponent 
                heading='Centers contacts Page'
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
                            {
                                contacts.map( elem => {
                                    return (
                                        <Tab.Pane eventKey={elem.id} key={elem.id}>
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {elem.title}
                                                    </Card.Title>
                                                    <ReactMarkdown
                                                        source={elem.text} 
                                                    />
                                                </Card.Body>
                                                <script type="text/javascript" charSet="utf-8" async src={`${elem.map}`}></script>
                                            </Card>
                                        </Tab.Pane>
                                    )
                                })
                            }
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