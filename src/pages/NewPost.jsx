import React from 'react';
import Navbar from '../components/Navmenu';
import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useAuth from '../services/useAuth';
import api from '../services/Api';
import { useNavigate} from 'react-router-dom';

const NewPost = () => {

    const NEW_POST = '/posts/new';

    const navigate = useNavigate();
    
    const [title, setTitle] = useState([]);
    const [topic, setTopic] = useState([]);
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [procedure, setProcedure] = useState('');
    const [linkExplainFocus, setLinkExplainFocus] = useState(false);
    const [descriptionFocus, setDescriptionFocus]
     = useState(false);
    const [procedureFocus, setProcedureFocus] = useState(false);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const linkRef = useRef();
    const procedureRef = useRef();

    const topics = [
        { value: 'Network' ,label: 'Network' },
        { value: 'Development', label:'Development' },
        { value: 'Datacenter', label: 'Datacenter' },
        { value: 'Cloud', label: 'Cloud' },
    ];

    useEffect(() => {

        procedureRef.current.focus();
        linkRef.current.focus();
        descriptionRef.current.focus();
        titleRef.current.focus();
    },[])

    const { auth } = useAuth();

    const handleSubmit = async (e) =>{
        
        e.preventDefault();

        try {
            await api.post(NEW_POST,
                {
                    title, topic: topic.value ,content: description, link, procedure 
                },
                {
                    headers: {
                        'Authorization': `Bearer ${auth.tokens.access}`
                    }
                }
            )            
            navigate("/")
        } catch (error) {
            if(error.response){
                if(error.response.status === 403){
                    navigate('/unauthorized')
                }else{
                    window.alert("Error on server, try again later");
                }
            }else if(error.request){
                window.alert("No Response from server, try again later");
            }else{
                console.error(error)
            }
        }
    }

    return ( 
        <div>
            <Navbar />
        
            <div className="my-5">
                <Container>
                    <Card className="border-0">
                        <Card.Body className="p-2">   
                            <div className="text-center mb-5">
                                <h2 className="fw-bold mb-1"> Faça um post </h2>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col md={3}>
                                        <h5 className='fw-bold'> Títilo </h5>
                                        <p className='small text-muted'>
                                            Seja explícito com o Título, este será o campo mais evidenciado durante a pesquisa!
                                        </p>
                                    </Col>
                                    <Col md={9}>
                                        <Row>
                                            <Col md={8} className="mb-3">
                                                <FloatingLabel 
                                                    label="Titulo do Post"
                                                    className="mb-3"
                                                    >
                                                    <Form.Control 
                                                        required
                                                        type="text"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        ref={titleRef}
                                                        >
                                                    </Form.Control>
                                                </FloatingLabel>
                                            </Col>
                                            <Col md={4} className="mb-3">
                                            <p className='fw-bold'>Área</p>
                                                <Select
                                                    defaultValue={topic}
                                                    onChange={setTopic}
                                                    options={topics}
                                                    placeholder={'Selecione aqui a área do post'}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={3}>
                                        <h5 className='fw-bold'>Descrição</h5>
                                        <p className='small text-muted'>
                                            Descreva o problema aqui!
                                        </p>
                                    </Col> 
                                    <Col md={9} className="mb-3">
                                        <FloatingLabel 
                                            controlId='' 
                                            label="Descrição"
                                            className="mb-3"
                                            >
                                            <Form.Control 
                                                style = {{ height: "150px"}}
                                                as="textarea"
                                                required
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                onFocus={ () => setDescriptionFocus(true)}
                                                onBlur={ () => setDescriptionFocus(false)}
                                                ref={descriptionRef}>
                                            </Form.Control>
                                            <p className= { descriptionFocus && (description.length < 40) ? "small text-muted" : "d-none" }>
                                                Escreva uma descrição de pelo menos 40 caracteres!
                                            </p>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={3}>
                                        <h5 className='fw-bold'> Procedimetos </h5>
                                        <p className='small text-muted'>
                                            Dado o problema acima citado, nesta secção deve-se escrever de forma exaustiva como ou quais passos devem-se seguir para solucionar o mesmo!
                                        </p>
                                    </Col>
                                    <Col md={9}>
                                        <Row>
                                            <Col md={12} className="mb-3">
                                                <FloatingLabel 
                                                    controlId='' 
                                                    label="Procedimentos"
                                                    className="mb-3"
                                                    >
                                                    <Form.Control 
                                                        style = {{ height: "150px"}}
                                                        as="textarea"
                                                        required
                                                        value={procedure}
                                                        onChange={(e) => setProcedure(e.target.value)}
                                                        onFocus={ () => setProcedureFocus(true)}
                                                        onBlur={ () => setProcedureFocus(false)}
                                                        ref={procedureRef}>
                                                    </Form.Control>
                                                    <p className= { procedureFocus && (procedure.length < 199) ? "small text-muted" : "d-none" }>
                                                        Seja exaustivo com os procedimentos, escreva pelo menos 200 caracteres onde passo a passo temos a descrição para chegar a solução!
                                                    </p>
                                                </FloatingLabel>
                                            </Col>
                                            <Col md={12} className="mb-3">
                                                <FloatingLabel 
                                                    controlId='' 
                                                    label="Adicione um link que possa auxiliar na resolucao"
                                                    className="mb-3"
                                                    >
                                                    <Form.Control 
                                                        type="text"
                                                        value={link}
                                                        onChange={(e) => setLink(e.target.value)}
                                                        onFocus={ () => setLinkExplainFocus(true)}
                                                        onBlur={ () => setLinkExplainFocus(false)}
                                                        ref={linkRef}
                                                        >
                                                    </Form.Control>
                                                    <p className= {linkExplainFocus ? "small text-muted" : "d-none" }>
                                                        Em caso de mais de um link, separe cada link usando vírgula[,]. Eg: www.cilix.co.mz, google.com,...! 
                                                    </p>
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-center">
                                            <Button variant="primary" type="submit">
                                                Submeter
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default NewPost