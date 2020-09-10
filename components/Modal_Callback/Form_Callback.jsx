//  import { Formik } from 'formik'
//  import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap'
//  import * as yup from 'yup'

// const schema = yup.object({
//   userName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   city: yup.string().required(),
//   state: yup.string().required(),
//   zip: yup.string().required(),
//   terms: yup.bool().required(),
// });

// export function OrderCallForm() {
//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={alert('asdasd')}
      
//       initialValues={{
//         userName: '',
//         lastName: '',
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group  controlId="validationFormik01">
//               <Form.Label>User name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="userName"
//                 value={values.userName}
//                 onChange={handleChange}
//                 isValid={touched.userName && !errors.userName}
//               />
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>
           
            
            
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>City</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={values.city}
//                 onChange={handleChange}
//                 isInvalid={!!errors.city}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik04">
//               <Form.Label>State</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="State"
//                 name="state"
//                 value={values.state}
//                 onChange={handleChange}
//                 isInvalid={!!errors.state}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.state}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label>Zip</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Zip"
//                 name="zip"
//                 value={values.zip}
//                 onChange={handleChange}
//                 isInvalid={!!errors.zip}
//               />

//               <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>

//         <Form.Group controlId="formBasicChoose">
//             <Form.Label>Select Location</Form.Label>
//             <Form.Control 
//                 as="select" 
//                 defaultValue="Choose location..."
            
//                 type="text"
//                 name="address"
//                 value={values.address}
//                 onChange={handleChange}
//             >
//                 <option>Location #1...</option>
//                 <option>Location #2...</option>
//                 <option>Location #3...</option>
//             </Form.Control>
//         </Form.Group>

          
//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }


//  0
// import React from 'react'
// import { Form, Button } from 'react-bootstrap'
// import { Formik } from 'formik'

// export function OrderCallForm() {

//     const handleSubmit = () => console.log('submit');
// return (
//     <Formik
//       onSubmit={console.log}
      
      
//       initialValues={{
//         userName: '',
//         userNumber: '',
//         userSelectedLocation: ''
//       }}
//     >
//         {({
//             handleSubmit,
//             handleChange,
//             handleBlur,
//             values,
//             touched,
//             isValid,
//             errors,
//         }) => (
//             <Form>
//                 <Form.Group controlId="formBasicName">
//                     <Form.Label>Your name</Form.Label>
//                     <Form.Control 
//                         placeholder="Enter here your name" 

//                         type="text"
//                         name="userName"
//                         value={values.userName}
//                         onChange={handleChange}
//                     />
//                     <Form.Text className="text-muted">
//                         Some text here...
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Your phone number</Form.Label>
//                     <Form.Control 
//                         type='tel' 
//                         placeholder="Your phone number" 
                    
                        
//                         name="userNumber"
//                         value={values.userNumber}
//                         onChange={handleChange}
//                     />
//                     <Form.Text className="text-muted">
//                         Phone number like - +79999999999
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicChoose">
//                     <Form.Label>Select Location</Form.Label>
//                     <Form.Control 
//                         as="select" 
//                         // defaultValue="Choose location..."

//                         type="text"
//                         name="userSelectedLocation"
//                         value={values.userSelectedLocation}
//                         onChange={handleChange}
//                     >
//                         <option>Location #1...</option>
//                         <option>Location #2...</option>
//                         <option>Location #3...</option>
//                     </Form.Control>
//                 </Form.Group>

//                 <Button variant="success" type="submit" onClick={handleSubmit}>
//                     Submit
//                 </Button>
//             </Form>
//         )}
//     </Formik>
//   );
//         }


import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap'


const OrderCallForm = () => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.
  const formik = useFormik({
    initialValues: {
      userName: '',
      userNumber: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2))
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
                    // value={values.userName}
                //  onChange={handleChange}
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

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
  );
};

export default OrderCallForm;



//     return (
//         <Form>
//             <Form.Group controlId="formBasicName">
//                 <Form.Label>Your name</Form.Label>
//                 <Form.Control type='text' placeholder="Enter here your name" />
//                 <Form.Text className="text-muted">
//                     Some text here...
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Your phone number</Form.Label>
//                 <Form.Control type='tel' placeholder="Your phone number" />
//                 <Form.Text className="text-muted">
//                     Phone number like - +79999999999
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicChoose">
//                 <Form.Label>Select Location</Form.Label>
//                 <Form.Control as="select" defaultValue="Choose location...">
//                     <option>Location #1...</option>
//                     <option>Location #2...</option>
//                     <option>Location #3...</option>
//                 </Form.Control>
//             </Form.Group>

//             <Button variant="success" type="submit" onClick={handleSubmit}>
//                 Submit
//             </Button>
//         </Form>
//     )
// }


// 2
// import React from 'react';
//  import { Formik } from 'formik';
 
//  const OrderCallForm = () => (
//    <div>
//      <h1>Anywhere in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <input
//              type="email"
//              name="email"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}
//            />
//            {errors.email && touched.email && errors.email}
//            <input
//              type="password"
//              name="password"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}
//            />
//            {errors.password && touched.password && errors.password}
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </form>
//        )}
//      </Formik>
//    </div>
//  );
 
//  export default OrderCallForm;







//  1
// import React from 'react'
// import { Form, Button } from 'react-bootstrap'

// export function OrderCallForm() {

//     const handleSubmit = () => console.log('submit');

//     return (
//         <Form>
//             <Form.Group controlId="formBasicName">
//                 <Form.Label>Your name</Form.Label>
//                 <Form.Control type='text' placeholder="Enter here your name" />
//                 <Form.Text className="text-muted">
//                     Some text here...
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Your phone number</Form.Label>
//                 <Form.Control type='tel' placeholder="Your phone number" />
//                 <Form.Text className="text-muted">
//                     Phone number like - +79999999999
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicChoose">
//                 <Form.Label>Select Location</Form.Label>
//                 <Form.Control as="select" defaultValue="Choose location...">
//                     <option>Location #1...</option>
//                     <option>Location #2...</option>
//                     <option>Location #3...</option>
//                 </Form.Control>
//             </Form.Group>

//             <Button variant="success" type="submit" onClick={handleSubmit}>
//                 Submit
//             </Button>
//         </Form>
//     )
// }