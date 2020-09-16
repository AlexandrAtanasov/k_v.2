import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap'

import { server } from '../../config'

import emailjs from 'emailjs-com';


const OrderCallForm = () => {

     
    const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const user = process.env.NEXT_PUBLIC_EMAIL_USER_ID;

  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      userName: '',
      userNumber: '',
      userLocation: '',
    },
    onSubmit: values => {
        console.log(JSON.stringify(values, null, 2))
        emailjs.send(service, template, values, user)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
        // go to main after submit
        // window.location.href = "/";
    },
  });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control 
                    placeholder="Enter here your name" 
                    type="text"
                    // id="userName"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                <Form.Text className="text-muted">
                    Some text here...
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Your phone number</Form.Label>
                <Form.Control 
                    type='tel' 
                    // placeholder="Your phone number" 
                    // id="userNumber"
                    name="userNumber"
                    onChange={formik.handleChange}
                    value={formik.values.userNumber}
                />
                <Form.Text className="text-muted">
                    Phone number like - +79999999999
                </Form.Text>
            </Form.Group>


            <Form.Group controlId="formBasicChoose">
                <Form.Label>Select Location</Form.Label>
                <Form.Control 
                    as="select" 
                    // defaultValue="Choose location..."
                    // type='text' 
                    // placeholder="Your phone number" 
                    // id="userNumber"
                    name="userLocation"
                    onChange={formik.handleChange}
                    value={formik.values.userLocation}
                >
                    <option>Location #1...</option>
                    <option>Location #2...</option>
                    <option>Location #3...</option>
                </Form.Control>
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
  );
};

export default OrderCallForm;