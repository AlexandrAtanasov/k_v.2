import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap'

import { server } from '../../config'

import emailjs from 'emailjs-com';

// import localization data
import { local } from '../../data/localization_data/components/Modal_Callback/Form_Callback'

// TODO: validation 

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
                <Form.Label>{local.form_name_label}</Form.Label>
                <Form.Control 
                    type="text"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
                <Form.Label>{local.form_number_label}</Form.Label>
                <Form.Control 
                    type='tel' 
                    name="userNumber"
                    onChange={formik.handleChange}
                    value={formik.values.userNumber}
                />
                <Form.Text className="text-muted">
                    {local.form_number_info}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicChoose">
                <Form.Label>{local.form_location_label}</Form.Label>
                <Form.Control 
                    as="select" 
                    name="userLocation"
                    onChange={formik.handleChange}
                    value={formik.values.userLocation}
                >
                    <option>{local.form_location_options.option_1}</option>
                    <option>{local.form_location_options.option_2}</option>
                    <option>{local.form_location_options.option_3}</option>
                </Form.Control>
            </Form.Group>
            <div style={{textAlign:'center'}}>
                <Button className="button_green_color" type="submit">
                    {local.form_button}
                </Button>
            </div>
        </Form>
  );
};

export default OrderCallForm;