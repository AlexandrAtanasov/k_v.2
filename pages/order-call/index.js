import { MainLayout } from '../../layouts/MainLayout'
import { Form, Button } from 'react-bootstrap'

export default function OrderCall() {
    return (
        <MainLayout
            title='Price page'
            description='Description for Price page'
        >
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type='text' placeholder="Enter here your name" />
                    <Form.Text className="text-muted">
                        Some text here...
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Your phone number</Form.Label>
                    <Form.Control type='tel' placeholder="Your phone number" />
                    <Form.Text className="text-muted">
                        Phone number like - +79999999999
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicChoose">
                    <Form.Label>Select Location</Form.Label>
                    <Form.Control as="select" defaultValue="Choose location...">
                        <option>Location #1...</option>
                        <option>Location #2...</option>
                        <option>Location #3...</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </MainLayout>
    )
}  