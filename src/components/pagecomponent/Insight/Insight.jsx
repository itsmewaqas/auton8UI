import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../../sharedcomponent/localization';
import { ChartContainer } from '../../sharedcomponent/BoxContainers';
import { BiUser, BiRightArrowAlt } from "react-icons/bi";

function Insight() {

    const data = useSelector((state) => {
        return state
    });

    let getLan = data.lang.langType;
    const culture = getLan === 'ar' ? strings.ar : strings.en;

    const scoreList = [
        {
            id: 1,
            title: 'All',
            score: '65',
        },
        {
            id: 2,
            title: 'Success',
            score: '1553',
        },
        {
            id: 3,
            title: 'Failed',
            score: '3870',
        },
        {
            id: 4,
            title: 'Not Run',
            score: '35',
        },
        {
            id: 5,
            title: 'All',
            score: '32',
        },
        {
            id: 6,
            title: 'Success',
            score: '147',
        },
        {
            id: 7,
            title: 'Failed',
            score: '42',
        },
        {
            id: 8,
            title: 'Not Run',
            score: '12',
        },

    ];

    return (
        <div>
            <Container fluid>
                <h1>{culture.Insight.heading}</h1>
                <Row className='px-3'>
                    <h2>Web Run Statistics</h2>
                    {scoreList?.slice(0, 4).map((item, index) => (
                        <Col md="3">
                            <div className='dashboadCards' key={index.toString()}>
                                <BiUser className='iconSvg' />
                                <p>{item.title} <span>{item.score}</span></p>
                                <button><BiRightArrowAlt /></button>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className='px-3'>
                    <h2>APIs Run Statistics</h2>
                    {scoreList?.slice(4, 8).map((item, index) => (
                        <Col md="3">
                            <div className='dashboadCards' key={index.toString()}>
                                <BiUser className='iconSvg' />
                                <p>{item.title} <span>{item.score}</span></p>
                                <button><BiRightArrowAlt /></button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container fluid>
                <Row className='px-1'>
                    <Col md="6">
                        <ChartContainer title="Web Run Detail">
                            chart
                        </ChartContainer>
                    </Col>
                    <Col md="6">
                        <ChartContainer title="Api Run Detail">
                            chart
                        </ChartContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Insight;