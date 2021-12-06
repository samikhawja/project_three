import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap';
import './Form.css';
import Auth from "../../utils/auth";
import { CREATE_USER } from '../../utils/mutations.js'

const SignupForm = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    }

    return (
        <Form id='form' className='px-3'>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="John" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Schmidt" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="john@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <div className='btn-container'>
                <Button type='submit' id='btn'>Such Cry</Button>
            </div>
        </Form>
    );
}

export default SignupForm;