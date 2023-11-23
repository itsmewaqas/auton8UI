import React, { useState } from 'react';

function ButtonContainer(props) {
    return (
        <div className='buttonContainer clearfix'>
            {props.children}
        </div>
    );
}

function FilterContainer(props) {
    return (
        <div className="filterContainer clearfix">
            {props.children}
        </div>
    );
}

function TableContainer(props) {
    return (
        <div className="tableContainer clearfix">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}

function ChartContainer(props) {
    return (
        <div className="chartContainer clearfix">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}

function ContentContainer(props) {
    return (
        <div className="contentContainer clearfix">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}

export { ButtonContainer, FilterContainer, TableContainer, ChartContainer, ContentContainer };
