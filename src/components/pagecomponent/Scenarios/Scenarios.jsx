import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Form, Button, Table, Offcanvas } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../../sharedcomponent/localization';
import { ActionButton1, ActionButton2, ActionButton3 } from '../../sharedcomponent/ActionButton';
import { ButtonContainer, FilterContainer, TableContainer, ChartContainer } from '../../sharedcomponent/BoxContainers';
import { BiRevision, BiTrash, BiEdit, BiCopy, BiHistory, BiBookAdd, BiCalendar, BiBookmarkPlus, BiFilterAlt, BiPlay, BiReset } from "react-icons/bi";
import ReactSelect from '../../sharedcomponent/ReactSelect';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Scenarios() {

    const data = useSelector((state) => {
        return state
    });

    let getLan = data.lang.langType;
    const culture = getLan === 'ar' ? strings.ar : strings.en;

    // ReactSelect method,state,data start
    const [selectedOptions, setSelectedOptions] = useState();
    const [getItems, SetgetItems] = useState([]);

    const optionList = [
        { id: 0, value: "waqas", label: "waqas" },
        { id: 1, value: "alber", label: "alber" },
        { id: 2, value: "asad", label: "asad" },
        { id: 3, value: "salman", label: "salman" },
        { id: 4, value: "junaid", label: "junaid" },
        { id: 5, value: "kamil", label: "kamil" }
    ];

    function selectHandle(item) {
        setSelectedOptions(item);
        SetgetItems(item);
    }

    const removeItem = (id) => {
        const newList = getItems.filter((item) => item.id !== id);
        SetgetItems(newList);
    }
    // ReactSelect method,state,data end

    //filter modal function start
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //filter modal function end

    // ag grid function strat
    const tableActions = (props) => {
        return (
            <span>
                <button className="tableActionBtn"><BiPlay /></button>
                <button className="tableActionBtn"><BiCalendar /></button>
                <button className="tableActionBtn"><BiReset /></button>
            </span>
        );
    };

    const [rowData] = useState([
        { SNo: "1", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "2", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "3", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "4", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "5", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "6", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "7", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "8", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "9", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "10", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "11", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
        { SNo: "12", Name: "waqas", Description: 'dummmy test', CreatedAt: '12-10-2023', Type: 'Active' },
    ]);

    const [columnDefs] = useState([
        { field: "SNo", sortable: true },
        { field: "Name", sortable: true },
        { field: "Description", sortable: true },
        { field: "CreatedAt", sortable: true },
        { field: "Type", sortable: true },
        { field: "Actions", sortable: true, cellRenderer: tableActions }
    ]);

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
        };
    }, []);

    const onGridReady = (params) => {
        params.api.sizeColumnsToFit();
    };
    //ag grid function end

    useEffect(() => {
    }, [console.log(getItems)]);

    return (
        <div>
            <ButtonContainer>
                <ActionButton1
                    btnOnclick={() => console.log('btn click')}
                    btnText="Create New Test"
                    disabled={false}
                    btnIcon={<BiRevision />}
                />
                <ActionButton2
                    btnOnclick={() => console.log('btn click')}
                    disabled={false}
                    btnIcon={<BiTrash style={{ color: '#F20000' }} />}
                />
                <ActionButton2
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnIcon={<BiEdit style={{ color: '#000' }} />}
                />
                <ActionButton2
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnIcon={<BiCopy style={{ color: '#15B79E' }} />}
                />
                <ActionButton3
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnText="Test History"
                    btnIcon={<BiHistory />}
                />
                <ActionButton3
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnText="Add to scenerio"
                    btnIcon={<BiBookAdd />}
                />
                <ActionButton3
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnText="Schedule Test"
                    btnIcon={<BiCalendar />}
                />
                <ActionButton3
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnText="Add Lebel"
                    btnIcon={<BiBookmarkPlus />}
                />
                <ActionButton3
                    disabled={false}
                    btnOnclick={() => console.log('btn click')}
                    btnText="Run Test"
                    btnIcon={<BiRevision />}
                />
            </ButtonContainer>

            {/* <Container fluid>
                <h1>{culture.Scenarios.heading}</h1>
            </Container> */}

            <Container fluid>
                <FilterContainer>
                    <Row>
                        <Col md="3" className="my-2 mt-2">
                            <ReactSelect
                                optionList={optionList}
                                selectPlaceholder="Filter By Username"
                                selectValue={selectedOptions}
                                handleSelect={selectHandle}
                            />
                        </Col>
                        <Col md="3" className="my-2 mt-2">
                            <Form.Control type="text" value="" placeholder="Filter by Test Name" />
                        </Col>
                        <Col md="3" className="my-2 mt-2">
                            <Form.Control type="date" value="" placeholder="From Date" />
                        </Col>
                        <Col md="3" className="my-2 mt-2">
                            <Form.Control type="date" value="" placeholder="To Date" />
                        </Col>
                    </Row>
                </FilterContainer>
            </Container>

            {getItems.length > 0 ?
                <Container className='px-4 my-2 mt-2'>
                    <Row>
                        <Col md="1">
                            <p className='pt-2'>Filters:</p>
                        </Col>
                        <Col md="11">
                            <ul className='filterlist'>
                                {getItems?.map((item, index) => (
                                    <li key={index.toString()}>
                                        Name: <span>{item.value}</span>
                                        <button onClick={() => removeItem(item.id)}>X</button>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
                : null}

            <Container fluid>
                <FilterContainer>
                    <Row>
                        <Col md="10" className="my-2 mt-2">
                            <Form.Control type="text" value="" placeholder="Search By test case or Title" />
                        </Col>
                        <Col md="2" className="my-2 mt-1">
                            <ActionButton3
                                btnOnclick={handleShow}
                                btnText="Advance Filter"
                                btnIcon={<BiFilterAlt style={{ color: '#000' }} />}
                            />
                        </Col>
                    </Row>
                </FilterContainer>
            </Container>

            <Offcanvas placement={getLan === 'ar' ? "start" : "end"} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter Test Cases</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Col md="12" className="my-1">
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Select</option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Deactive">Deactive</option>
                            </Form.Select>
                        </Col>
                        <Col md="12" className="my-1">
                            <Form.Label>Priority</Form.Label>
                            <ReactSelect
                                optionList={optionList}
                                selectPlaceholder="Filter By Username"
                                selectValue={selectedOptions}
                                handleSelect={selectHandle}
                            />
                        </Col>
                        <Col md="12" className="my-1">
                            <Form.Label>Tag</Form.Label>
                            <ReactSelect
                                optionList={optionList}
                                selectPlaceholder="Filter By Username"
                                selectValue={selectedOptions}
                                handleSelect={selectHandle}
                            />
                        </Col>
                        <Col md="12" className="my-1">
                            <Form.Label>Test Case Type</Form.Label>
                            <ReactSelect
                                optionList={optionList}
                                selectPlaceholder="Filter By Username"
                                selectValue={selectedOptions}
                                handleSelect={selectHandle}
                            />
                        </Col>
                        <Col md="12" className="my-1">
                            <Form.Label>Automation Status</Form.Label>
                            <ReactSelect
                                optionList={optionList}
                                selectPlaceholder="Filter By Username"
                                selectValue={selectedOptions}
                                handleSelect={selectHandle}
                            />
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>

            <Container fluid>
                <TableContainer title="Test List Items">
                    <div className="ag-theme-alpine" style={{ width: '100%', height: 310 }}>
                        <AgGridReact
                            rowData={rowData}
                            onGridReady={onGridReady}
                            defaultColDef={defaultColDef}
                            pagination={true}
                            paginationPageSize={5}
                            columnDefs={columnDefs}></AgGridReact>
                    </div>
                </TableContainer>
            </Container>
        </div>
    );
}

export default Scenarios;