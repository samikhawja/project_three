import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.css';

import Auth from "../../utils/auth";
//import { loginUser } from somewhere in utils, api or mutation?

const LoginForm = () => {
    // const [formData, setFormData] = useState({ email: '', password: '' });

    // // const [validated] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

    //     const form = event.Target
        
    //     try {
    //         const response = await loginUser(formData);

    //         if (!response.ok) {
    //             throw new Error('An error occurred when logging you in.');
    //         }
    //         const { token, user } = await response.json();

    //         Auth.login(token);
    //         } catch (err) {

    //         setShowAlert(true);
    //         }
            
    //         // clear input contents upon submission of form
    //         setsetFormData({
    //         email: '',
    //         password: '',
    //     });

    };

    return (
        <Form id='forms' className='px-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="john@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className='btn-container'>
                <Button type='submit' id='btn'>So Pain</Button>
            </div>
        </Form>
    );
}

export default LoginForm;