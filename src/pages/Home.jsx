import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navmenu';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FetchPosts from '../components/FetchPosts';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Home = () => {

	const [searchKey, setSearchKey] = useState([]) 

    const areas = [
        { value: 'Development' },
        { value: 'Cloud' },
        { value: 'Datacenter' },
        { value: 'Network' },
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
											<Link />
											<Form.Check 
												type="checkbox"
												id={index}
												label={ area.value }
												onChange={(e) => setSearchKey(e.target.value.toLowerCase())}
												value={area.value}
												checked={ searchKey === area.value }
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
									value={searchKey}
									onChange={(e) => setSearchKey(e.target.value)}
								/>
							</Form>
						</div>
						<div>
							<FetchPosts searchKey = {searchKey}/>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
  	)
}

export default Home