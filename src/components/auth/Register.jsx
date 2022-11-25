import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';
import api from '../../services/Api';

const REGISTER_URL = '/auth/signup/';

const Register = () => {

  const[name, setName] = useState('');
  const[match, setMatch] = useState('');
  const[validMatch, setValidMatch] = useState(false);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  useEffect(() => {

    setValidMatch(password === match);
  },[password, match])

  const handleSubmit = async (e) =>{

    e.preventDefault();

    if (!validMatch){
      Alert("Passwords don't match!")
      return
    }

    try{
      const response = await api.post(REGISTER_URL, {email: email, username: name, password:password },)
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response))
      setName('');
      setPassword('');
      setEmail('');
      setMatch('');
    }catch(error){
      if(error.response){
        if(error.response.status === 422){
          Alert("Email or Username already taken, try to change and try again!");
        }else{
          Alert("Error on server, try again later")
        }
      }else if(error.request){
        Alert("No Response from server, try again later")
      }else{
        Alert("Unknown error!")
      }
    }
  }

  return (
    <Container style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
      <Row className="col-lg-9 bg-light">
  
      <Col className="">
        <Card className="border-0 bg-light">
          <Card.Header className='text-center' >Register Form</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} className="row">
              <Form.Group className="mb-3">
                <Form.Label htmlFor='name'> 
                 Username
                </Form.Label>
                <Form.Control 
                  id="name"
                  autoComplete='off' 
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="rounded-0 border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email"> 
                  Email address
                </Form.Label>
                <Form.Control
                  id="email"
                  type="email" 
                  placeholder="Enter email" 
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="rounded-0 border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-md-6">
                <Form.Label htmlFor="password"> Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-describedby="pwdnote"
                  value={password}
                  className="rounded-0 border-0"
                />
                <Form.Text className="text-muted">
                  Choose a strong password!
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 col-md-6">
                <Form.Label htmlFor="confirm_pwd"> Confirm Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password Confirmation" 
                  id="confirm_pwd"
                  onChange={(e) => setMatch(e.target.value)}
                  required
                  aria-describedby="confirmnote"
                  value={match}
                  className="rounded-0 border-0"
                />
              </Form.Group>
              <Button variant="primary" className="rounded-0" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </Container>
  )
}

export default Register