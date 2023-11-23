import React, { useState } from 'react';

function LoginTextInput(props) {

    return (
       <div className='loginTextInputMain'>
        <label>{props.inputlabel}</label>
            <div className='loginTextInput'>
                {props.inputicon}
                <input 
                type={props.inputtype} 
                id={props.inputID}
                className={props.inputclass} 
                placeholder={props.placeholder} 
                value={props.inputvalue} 
                onChange={props.inputOnchange}/>
            </div>
        </div>
    );
}

export default LoginTextInput;