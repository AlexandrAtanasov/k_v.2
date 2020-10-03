import { MainLayout } from '../../layouts/MainLayout'
import { Table, Card } from 'react-bootstrap'
import { CarouselComponent } from '../../components/Main/CarouselComponent'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { price_carousel } from '../../data/price/price_carousel/price_carousel'

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
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    Price
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Price #1
                    </Card.Title>
                    <Card.Text>
                        Commodo veniam aliquip reprehenderit officia consequat esse culpa. Laborum ex fugiat ullamco commodo minim sunt ex aute velit labore. Occaecat culpa deserunt tempor esse. Labore Lorem minim consequat labore nisi laborum esse Lorem reprehenderit non veniam. Laborum consectetur id non laborum in irure voluptate amet officia non cillum exercitation irure est. Elit amet elit in sint laboris velit tempor dolore cillum quis commodo. Officia deserunt dolor qui aliquip ex et consectetur consequat id id laboris eiusmod dolore do.
                    </Card.Text>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>2</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>3</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
            
                    {/* <OrderCallButton /> */}
                </Card.Body>
            </Card>
      
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    Price
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Price #2
                    </Card.Title>
                    <Card.Text>
                        Commodo veniam aliquip reprehenderit officia consequat esse culpa. Laborum ex fugiat ullamco commodo minim sunt ex aute velit labore. Occaecat culpa deserunt tempor esse. Labore Lorem minim consequat labore nisi laborum esse Lorem reprehenderit non veniam. Laborum consectetur id non laborum in irure voluptate amet officia non cillum exercitation irure est. Elit amet elit in sint laboris velit tempor dolore cillum quis commodo. Officia deserunt dolor qui aliquip ex et consectetur consequat id id laboris eiusmod dolore do.
                    </Card.Text>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>2</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>3</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
            
                    {/* <OrderCallButton /> */}
                </Card.Body>
            </Card>
      
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    Price
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Price #2
                    </Card.Title>
                    <Card.Text>
                        Commodo veniam aliquip reprehenderit officia consequat esse culpa. Laborum ex fugiat ullamco commodo minim sunt ex aute velit labore. Occaecat culpa deserunt tempor esse. Labore Lorem minim consequat labore nisi laborum esse Lorem reprehenderit non veniam. Laborum consectetur id non laborum in irure voluptate amet officia non cillum exercitation irure est. Elit amet elit in sint laboris velit tempor dolore cillum quis commodo. Officia deserunt dolor qui aliquip ex et consectetur consequat id id laboris eiusmod dolore do.
                    </Card.Text>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <th key={index}>Table heading</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>2</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>3</td>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <td key={index}>Table cell {index}</td>
                                ))}
                            </tr>
                        </tbody>
                    </Table>
            
                    {/* <OrderCallButton /> */}
                </Card.Body>
            </Card>
      
        </MainLayout>
    )
}  