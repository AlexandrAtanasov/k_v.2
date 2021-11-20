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
// import data - price individual at home
import { price_individual_home } from '../../data/pages/price/price_individual_home/price_individual_home.js'
import { price_individual_home_info } from '../../data/pages/price/price_individual_home/price_individual_home_info.js'
// import data - price individual rehab
import { price_individual_rehab } from '../../data/pages/price/price_individual_rehab/price_individual_rehab.js'
import { price_individual_rehab_info } from '../../data/pages/price/price_individual_rehab/price_individual_rehab_info.js'
// import data - price kinezio-massage
import { price_kinezio_massage } from '../../data/pages/price/price_massage/price_kinezio_massage.js'
import { price_kinezio_massage_info } from '../../data/pages/price/price_massage/price_kinezio_massage_info.js'
// import data - price massage
import { price_massage } from '../../data/pages/price/price_massage/price_massage.js'
import { price_massage_info } from '../../data/pages/price/price_massage/price_massage_info.js'
// import data - price kinesitaping
import { price_kinesitaping } from '../../data/pages/price/price_kinesitaping/price_kinesitaping.js'
import { price_kinesitaping_info } from '../../data/pages/price/price_kinesitaping/price_kinesitaping_info.js'

export default function PricePage() {
    return (
        <MainLayout
            title='Стоимость услуг'
            description='Стоимость услуг сети центров кинезитерапии Кинезис'
        >
            <HeadingComponent 
                heading='Стоимость услуг'
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
      
            {/* Individual at home */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_individual_home_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_individual_home_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Услуга</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_individual_home.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
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
            
            {/* Individual rehab */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_individual_rehab_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_individual_rehab_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Услуга</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_individual_rehab.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
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
                            
            {/* Kinezio Massage */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_kinezio_massage_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_kinezio_massage_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Продолжительность, минут</th>
                                <th>Стоимость, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_kinezio_massage.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
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
                            
            {/* Massage */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_massage_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_massage_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Продолжительность, минут</th>
                                <th>Стоимость, рублей</th>
                                <th>Стоимость для клиентов центра, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_massage.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.duration}
                                                </td>
                                                <td>
                                                    {elem.cost}
                                                </td>
                                                <td>
                                                    {elem.cost_club}
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


            {/* Kinesitaping */}
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_kinesitaping_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_kinesitaping_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Спецификация</th>
                                <th>Стоимость, рублей</th>
                                <th>Стоимость для клиентов центра, рублей</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_kinesitaping.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.duration}
                                                </td>
                                                <td>
                                                    {elem.cost}
                                                </td>
                                                <td>
                                                    {elem.cost_club}
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