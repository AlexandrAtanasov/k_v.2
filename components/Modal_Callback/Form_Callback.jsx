import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';

// import { server } from '../../config'

// import localization data
import { local } from '../../data/localization_data/components/Modal_Callback/Form_Callback'

// TODO: normal validation 

const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Введите имя';
    } else if ( values.userName.length > 30 ) {
      errors.userName = 'Значение должно быть короче 30 символов';
    }
 
    if (!values.userNumber) {
      errors.userNumber = 'Введите номер телефона';
    } else if (!/^[0-9]+$/i.test(values.userNumber)) {
      errors.userNumber = 'Номер должен содержать только цифры';
    }

    return errors;
  };


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
            userLocation: 'Пользователь не указал адрес!',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
            emailjs.send(service, template, values, user)
            .then(function(response) {
                alert(`${values.userName}, скоро вам перезвонят из центра Кинезис!`);
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = "/";
            }, function(error) {
                alert(`${values.userName}, что-то пошло не так!`);
                console.log('FAILED...', error);
            });
            // go to main after submit
        },
    });

    const basicNavbarNav = document.getElementById("basic-navbar-nav");
    const basicBavbarNavButton = document.getElementById("basic-navbar-nav-button");

    if (basicNavbarNav.classList.contains('show')) {
        basicBavbarNavButton.click();
    } 

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>{local.form_name_label}</Form.Label>
                <Form.Control 
                    type="text"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                />
                <Form.Text className="text-muted">
                    {formik.errors.userName ? `${formik.errors.userName}` : null}
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicNumber">
                <Form.Label>{local.form_number_label}</Form.Label>
                <Form.Control 
                    type='tel' 
                    name="userNumber"
                    placeholder={local.form_number_info}
                    onChange={formik.handleChange}
                    value={formik.values.userNumber}
                />
                <Form.Text className="text-muted">
                    {formik.errors.userNumber ? `${formik.errors.userNumber}` : null}
                    {/* {local.form_number_info} */}
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