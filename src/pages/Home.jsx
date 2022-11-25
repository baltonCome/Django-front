import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FetchPosts from '../components/FetchPosts';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaSearch } from 'react-icons/fa';

const Home = () => {

    const areas = [
        { value: 'Development' },
        { value: 'Cloud' }, 
        { value: 'Structure' },
        { value: 'Excel' },
        { value: 'Datacenter' },
        { value: 'Network & Connections' },
    ];


  	return (
		<>
			<Navbar/>
			<Container>
				<Row>
					<Col md={3} className="d-none d-md-block mt-3" >
						<h5 className='m-3 fw-bold'>Common tags</h5>
						<div>
							<h6 className="fw-bold">Areas</h6>
							<ListGroup>
								<ButtonGroup vertical>
									{
										areas.map((area, index) => (
											<ListGroup.Item id={index} className="border-0">
											<Form.Check 
												type="checkbox"
												id={index}
												label={ area.value }
											/>
											</ListGroup.Item>
										)) 
									}
								</ButtonGroup>
							</ListGroup>
						</div>
					</Col>
					<Col md={9}>
						<div className='d-flex justify-content-center'>
							<Form className="d-flex mt-4 w-75">
								<FormControl
									type="search"
									placeholder="Search"
									className="rounded-pill"
									aria-label="Search"
								/>
								<Button className="rounded-pill"> <FaSearch /> </Button>
							</Form>
						</div>
						<div>
							<FetchPosts />
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
  	)
}

export default Home