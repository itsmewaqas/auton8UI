import React, { useState } from 'react';

function ActionButton1(props) {
    return (
        <button 
            className='actionButtonStyle1'
            disabled={props.disabled}
            id={props.btnId}
            onClick={props.btnOnclick}>
            {props.btnIcon}
            {props.btnText}
        </button>
    );
}

function ActionButton2(props) {
    return (
        <button 
            className='actionButtonStyle2'
            disabled={props.disabled}
            id={props.btnId}
            onClick={props.btnOnclick}>
            {props.btnIcon}
        </button>
    );
}

function ActionButton3(props) {
    return (
        <button 
            className='actionButtonStyle3'
            disabled={props.disabled}
            id={props.btnId}
            onClick={props.btnOnclick}>
            {props.btnIcon}
            {props.btnText}
        </button>
    );
}


export  {ActionButton1,ActionButton2,ActionButton3};