import { MainLayout } from '../../layouts/MainLayout'
import { Table, Card } from 'react-bootstrap'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { price_sale } from '../../data/pages/price/price_sale/price_sale.js'
import { price_sale_info } from '../../data/pages/price/price_sale/price_sale_info.js'


// TODO: or make link to price page?
export default function SalesPage() {
    return (
        <MainLayout
            title='Акции и скидки'
            description='Постоянные акции и скидки в центрах кинезитерапии Кинезис'
        >
            <HeadingComponent 
                heading='Постоянные акции и скидки'
            />
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    {price_sale_info.header}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {price_sale_info.text}
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Наименование</th>
                                <th>Бонус</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                price_sale.map( elem => {
                                    return (
                                        <>
                                            <tr key={elem.id}>
                                                <td>
                                                    {elem.id}
                                                </td>
                                                <td>
                                                    {elem.bonus}
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
            
                    {/* <OrderCallButton /> */}
                </Card.Body>
            </Card>
        </MainLayout>
    )
} 