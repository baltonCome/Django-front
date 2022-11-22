import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import api from '../../services/Api';
import useAuth from '../../services/useAuth';


const LOGIN_URL = '/auth/login/'

const Login = () => {

  const { setAuth } = useAuth();
  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await api.post(LOGIN_URL,
        JSON.stringify({email , password}),
      );
      console.log(response.data)
      console.log(response.data.token)
      setAuth( response.data ) 
      //setPassword('');
      //setEmail('');
      navigate(from, {replace: true});
    } catch (error) {
      if(error.response){
        if(error.response.status === 401){
          Alert("Unrecognized Credentials!");
        }else{
          Alert("Error on server, try again later");
        }
      }else if(error.request){
        Alert("No Response from server, try again later");
      }else{
        Alert("Unknown error!");
      }
    }
  }

  return (
    <Container style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
      <Card className="border-0 bg-light">
        <Card.Header className='text-center' >Login Form</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="row">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email"> 
                Email address
              </Form.Label>
              <Form.Control 
                type="email" 
                id="email"
                placeholder="Enter email" 
                autocomplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="rounded-0 border-0"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password"> Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              value={password}
                required
                className="rounded-0 border-0"
              />
            </Form.Group>
            <Button className="rounded-0" variant="primary" type="submit">
              Login
            </Button>
            <p className="text-center" >No Account? <Link className="link-primary mx-2" to="/register">Register</Link></p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login