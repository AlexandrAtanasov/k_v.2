import { MainLayout } from '../../layouts/MainLayout'
import { Table, Card } from 'react-bootstrap'
import { CarouselComponent } from '../../components/Main/CarouselComponent'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { price_carousel } from '../../data/pages/price/price_carousel/price_carousel'


// import data - services abonement
import { price_services } from '../../data/pages/price/price_services/price_services.js'
import { price_services_info } from '../../data/pages/price/price_services/price_services_info.js'
// import data - price abonement
import { price_abonement } from '../../data/pages/price/price_abonement/price_abonement.js'
import { price_abonement_info } from '../../data/pages/price/price_abonement/price_abonement_info.js'
// import data - price abonement support
import { price_abonement_support } from '../../data/pages/price/price_abonement_support/price_abonement_support.js'
import { price_abonement_support_info } from '../../data/pages/price/price_abonement_support/price_abonement_support_info.js'
// import data - price individual
import { price_individual } from '../../data/pages/price/price_individual/price_individual.js'
import { price_individual_info } from '../../data/pages/price/price_individual/price_individual_info.js'

export default function PricePage() {
    return (
        <MainLayout
            title='Price page'
            description='Description for Price page'
        >
            <HeadingComponent 
                heading='Price Page'
            />
            {/* <div
                style={{marginTop: '56px'}}
            >
                <CarouselComponent
                    data={price_carousel}
                />
            </div> */}

            {/* Services */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_services_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_services_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Услуга</th>
                                <th>Продолжительность</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_services.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
                                                </td>
                                                <td>
                                                    {elem.duration}
                                                </td>
                                                <td>
                                                    {elem.cost}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Abonement */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_abonement_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_abonement_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Спецификация</th>
                                <th>Количество занятий</th>
                                <th>Срок действия</th>
                                <th>Продолжительность занятия</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_abonement.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
                                                </td>
                                                <td>
                                                    {elem.numb_classes}
                                                </td>
                                                <td>
                                                    {elem.period}
                                                </td>
                                                <td>
                                                    {elem.duration}
                                                </td>
                                                <td>
                                                    {elem.cost}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
           
            {/* Abonement support */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_abonement_support_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_abonement_support_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Спецификация</th>
                                <th>Количество занятий</th>
                                <th>Срок действия</th>
                                <th>Продолжительность занятия</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_abonement_support.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
                                                </td>
                                                <td>
                                                    {elem.numb_classes}
                                                </td>
                                                <td>
                                                    {elem.period}
                                                </td>
                                                <td>
                                                    {elem.duration}
                                                </td>
                                                <td>
                                                    {elem.cost}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Individual */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_individual_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_individual_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Спецификация</th>
                                <th>Количество занятий</th>
                                <th>Продолжительность занятия</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_individual.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
                                                </td>
                                                <td>
                                                    {elem.numb_classes}
                                                </td>
                                                <td>
                                                    {elem.duration}
                                                </td>
                                                <td>
                                                    {elem.cost}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
      
    
        </MainLayout>
    )
}  