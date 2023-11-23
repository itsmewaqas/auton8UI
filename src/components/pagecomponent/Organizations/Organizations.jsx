import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Container, Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import strings from '../../sharedcomponent/localization';
import { ActionButton1 } from '../../sharedcomponent/ActionButton';
import { ButtonContainer, TableContainer } from '../../sharedcomponent/BoxContainers';
import { BiPlusCircle, BiPlay, BiCalendar, BiReset } from "react-icons/bi";
import ReactSelect from '../../sharedcomponent/ReactSelect';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Organizations() {

    const data = useSelector((state) => {
        return state
    });

    let getLan = data.lang.langType;
    const culture = getLan === 'ar' ? strings.ar : strings.en;

    // ReactSelect method,state,data start
    const [selectedOptions, setSelectedOptions] = useState();
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
    }
    // ReactSelect method,state,data end

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

    const [modalShow, setModalShow] = useState(false);

    return (
        <div>
            {/* <Container fluid>
                <h1>{culture.Organizations.heading}</h1>
            </Container> */}

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Add Organization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col md="12" className="my-4 mt-4">
                        <Form.Control type="text" value="" placeholder="Org Name" />
                    </Col>
                    <Col md="12" className="my-4 mt-4">
                        <Form.Control type="text" value="" placeholder="Description" />
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setModalShow(false)}>Close</Button>
                    <Button variant="success">Add</Button>
                </Modal.Footer>
            </Modal>

            <ButtonContainer>
                <ActionButton1
                    btnOnclick={() => setModalShow(true)}
                    btnText="Add"
                    disabled={false}
                    btnIcon={<BiPlusCircle />}
                />
                <Col md="3" className="mt-1 pull-right">
                    <Form.Select aria-label="Default select example">
                        <option>Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Deactive">Deactive</option>
                    </Form.Select>
                </Col>
            </ButtonContainer>

            <Container fluid>
                <TableContainer title="Organizations List">
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

export default Organizations;