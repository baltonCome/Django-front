import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
		<div className='bg-primary p-5'>
            <Container>
                <Row className='d-flex justify-content-center text-center'>
                    <Col md> 
                        <div>
                        	Posts
                        </div>
                    </Col>
                    <Col md={{ order: 'last' }}>
                        <div>
                            GitHub
                        </div>
                    </Col>
                    <Col md>
                        <div>
                            MIT License
                        </div>
                     </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer