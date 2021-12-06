import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import './Form.css';
import Auth from "../../utils/auth";
import { LOGIN } from '../../utils/mutations.js'

const LoginForm = () => {
    // default state of form is empty values in inputs
    const [formData, setFormData] = useState({ 
        email: '', 
        password: '' 
    });

    // Login user and return output, incl token
    const [login] = useMutation(LOGIN);

    // input fields need to be validated before submission
    const [validated] = useState(false);

    // use alerts in UI, default state not visible
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ 
            ...formData, 
            [name]: value 
        });
    };

    const handleFormSubmit = async (event) => {
        // stop default form behavior, page refresh on submission
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            // stop propagation of the current event in the capturing and bubbling phases. ie prevent further dispatch of the event
            event.stopPropagation();
        }
        
        try {
            // pass the form data to the login mutation to login user and create sesssion token
            const { data } = await login({ 
                variables : { ...formData }
            });

            
            // save login to localstorage
            Auth.login(data.login.token)

        } catch (e) {
            console.error(e);
            //display error in UI
            setShowAlert(true);
        }
        
        // clear input contents upon submission of form
        setFormData({
            email: '',
            password: '',
        });
    };

    // noValidate disables the browser default feedback tooltips while still providing access to the form validation api's 
    return (
        <Form id='form' className='px-3' noValidate validated={ validated } onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="john@gmail.com" 
                    onChange={ handleInputChange }
                    value={ formData.email }
                    required
                />
                <Form.Control.Feedback type='invalid'>Please provide the email address associated with your account.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    onChange={ handleInputChange }
                    value={ formData.password }
                    required
                />
                <Form.Control.Feedback type='invalid'>Please enter your password.</Form.Control.Feedback>
            </Form.Group>
            <div className='btn-container'>
                <Button 
                    disabled={ !(formData.email && formData.password) }
                    type='submit' 
                    id='btn'
                >
                    Login
                </Button>
            </div>
            <Alert 
                dismissible
                onClose={ () => setShowAlert(false) } 
                show={ showAlert }
                variant='danger' 
                >
                We were unable to retrieve you credentials, please try again.
            </Alert>
        </Form>
    );
}

export default LoginForm;