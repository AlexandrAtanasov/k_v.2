import React from 'react';
 import { Formik } from 'formik';
 
 const OrderCallForm = () => (
   <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );
 
 export default OrderCallForm;



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