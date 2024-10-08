import React from 'react'
import formikForm from 'formik'
import *as Yup from yup;

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });
  

const formikForm = () => {
    return (
        <div>
            <h1>formikForm</h1>
            <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log('Form submitted:', values);
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 500);
            }}
            >

                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <label htmlFor='username'>Username:</label>
                            <Field type='text' name='username' />
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                        </div>

                        <div>
                            <label htmlFor='email'>Email:</label>
                            <Field type='email' name='email' />
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                        </div>

                        <div>
                            <label htmlFor='password'>Password:</label>
                            <Field type='password' name='password' />
                            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                        </div>

                        <button type='submit' disabled='isSubmitting'>
                        {isSubmitting ? 'Submitting...' : 'Register'}     
                        </button>

                    </Form>
                )}

            </Formik>
          
        </div>
      );

};

export default formikForm