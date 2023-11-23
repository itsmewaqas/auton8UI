import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../../sharedcomponent/localization';

function PerformanceTest() {

    const data = useSelector((state) => {
        return state
    });

    let getLan = data.lang.langType;
    const culture = getLan === 'ar' ? strings.ar : strings.en;

    return (
        <div>
            <Container fluid>
                    <h1>{culture.PerformanceTest.heading}</h1>
            </Container>

        </div>
    );
}

export default PerformanceTest;