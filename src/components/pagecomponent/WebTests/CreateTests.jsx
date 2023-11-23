import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../../sharedcomponent/localization';
import { BiArrowBack, BiLogoGoogle, BiLogoFirefox, BiLogoEdge } from "react-icons/bi";
import { ContentContainer } from '../../sharedcomponent/BoxContainers';

function CreateTests() {

    const data = useSelector((state) => {
        return state
    });

    let navigate = useNavigate();

    let getLan = data.lang.langType;
    const culture = getLan === 'ar' ? strings.ar : strings.en;

    return (
        <div>
            <Container fluid>
                <h1><button onClick={() => navigate(-1)}><BiArrowBack /></button> Create New Tests</h1>
            </Container>

            <Container fluid>
                <ContentContainer title="Basic Information">
                    <Row className='px-3'>
                        <Col md="12" className="mt-3">
                            <Form.Control type="text" value="" placeholder="Test Name" />
                        </Col>
                        <Col md="12" className="mt-3">
                            <Form.Control type="text" value="" placeholder="Desorption" />
                        </Col>
                        <Col md="12" className="mt-3">
                            <Form.Control type="text" value="" placeholder="Base URL" />
                        </Col>
                        <Col md="12" className="my-3">
                            <Form.Label className='px-1'>Select Browser</Form.Label>
                            <br />
                            <BiLogoGoogle color='#aa2324' fontSize="34px" />
                            <Form.Check
                                inline
                                label="Google Chrome"
                                name="gc"
                                type="checkbox"
                            />
                            <BiLogoFirefox color='#c2662e' fontSize="34px" />
                            <Form.Check
                                inline
                                label="FireFox"
                                name="ff"
                                type="checkbox"
                            />
                            <BiLogoEdge color='#0f3b8e' fontSize="34px" />
                            <Form.Check
                                inline
                                label="Microsoft Edge"
                                name="Matric"
                                type="checkbox"
                            />
                        </Col>
                        <div class="d-flex flex-row my-3">
                            <Button variant="success">Create</Button>
                            <Button variant="outline-secondary" className='ms-3'>Cancel</Button>
                        </div>
                    </Row>
                </ContentContainer>
            </Container>
        </div>
    );
}

export default CreateTests;