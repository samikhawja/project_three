import React, { useState } from 'react';

import Auth from "../../utils/auth";

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations.js'

import { Form, Button, Alert } from 'react-bootstrap';
import './Form.css';



const SignupForm = () => {
    const [formData, setFormData] = useState({ 
        fname:'',
        lname:'',
        email: '', 
        password: '' 
    });

    // Create user and return output, incl token
    const [createUser] = useMutation(CREATE_USER);

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

        // must include 'current'
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            // stop propagation of the current event in the capturing and bubbling phases. ie prevent further dispatch of the event
            event.stopPropagation();
        }

        try {
            // Execute mutation and pass in form input data as variables
            const { data } = await createUser({ 
                variables: { ...formData }, 
            });
        
            // use auth.js login util to save session token to local storage
            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
            
            setShowAlert(true);
        }

        // clear input contents upon submission of form
        setFormData({ 
            fname:'',
            lname:'',
            email: '', 
            password: '' 
        });
    }

    

    return (
        <Form id='form' className='px-3' noValidate validated={ validated } onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="John" 
                    name='fname'
                    onChange={ handleInputChange }
                    value={ formData.fname }
                    required 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Schmidt" 
                    name='lname'
                    onChange={ handleInputChange }
                    value={ formData.lname }
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" placeholder="john@gmail.com" name='email'
                    onChange={ handleInputChange }
                    value={ formData.email }
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Password" 
                    name='password'
                    onChange={ handleInputChange }
                    value={ formData.password }
                    required
                />
            </Form.Group>
            <div className='btn-container'>
                <Button
                    disabled={ !(formData.fname &&formData.lname && formData.email && formData.password) } 
                    type='submit' 
                    id='btn'
                >
                    Create Account
                </Button>
            </div>
            <Alert 
                className='mt-3 mb-2'
                dismissible
                onClose={ () => setShowAlert(false) } 
                show={ showAlert }
                variant='danger' 
                >
                We were unable to create an account, please try again.
            </Alert>
        </Form>
    );
}

export default SignupForm;