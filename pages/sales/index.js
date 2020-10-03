import { MainLayout } from '../../layouts/MainLayout'
import { Table, Card } from 'react-bootstrap'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// TODO: or make link to price page?
export default function SalesPage() {
    return (
        <MainLayout
            title='Sales page'
            description='Description for Sales page'
        >
            <HeadingComponent 
                heading='Sales Page'
            />
            <Card>
                <Card.Header
                    className={` card_component_header `}
                >
                    Sales
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        Sales #1
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