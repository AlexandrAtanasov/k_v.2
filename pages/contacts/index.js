import { 
    Row,
    Col,
    Tab,
    Nav
} from 'react-bootstrap'
import { MainLayout } from '../../layouts/MainLayout'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import { CardComponentContacts } from "../../components/CardComponents/CardComponentContacts"

// import styles
import style from '../../styles/contacts_page.module.scss'

// import data
import { first_center } from '../../data/centers/first_center'
import { second_center } from '../../data/centers/second_center'
import { third_center } from '../../data/centers/third_center'


// TODO: add styles
export default function LocationsPage() {
    return (
        <MainLayout
            title='Centers contacts page'
            description='Description for Centers contacts page'
        >
            <HeadingComponent 
                heading='Centers contacts Page'
            />
            <Tab.Container id="persons_cards" defaultActiveKey="first" >
                
                <Row 
                    className={` ${style.margin} justify-content-md-center`}
                >
                    <Nav variant="pills">
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="first" className={style.button_outline_none}>
                                    Center #1
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className={style.button_outline_none}>
                                    Center #2
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className={style.button_outline_none}>
                                    Center #3
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Nav>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CardComponentContacts 
                                    data={first_center}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <CardComponentContacts 
                                    data={second_center}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <CardComponentContacts 
                                    data={third_center}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                
            </Tab.Container>
        </MainLayout>
    )
} 