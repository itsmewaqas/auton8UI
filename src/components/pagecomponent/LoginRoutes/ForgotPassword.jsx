import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import '../../../assets/css/style.scss';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BiMailSend } from "react-icons/bi";
import LoginTextInput from '../../sharedcomponent/LoginTextInput';

function ForgotPassword() {

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [email, Setemail] = useState('');
  const [emailErr, SetemailErr] = useState('');

  const clearValidation =()=>{
    SetemailErr('');
  }

  const forgotPass = () => {
    clearValidation();
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr('please inter valid email address');
    }
    if (email != '') {
      navigate('/');
    }
  }

  useEffect(() => {
  }, [])


  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className='formArea clearfix'>
            <h1>Auton<span>8</span></h1>
             <div className='formAreaInside'>
              <h2>Forgot Your Password</h2>
              <Col sm={12} className="my-3">
               <LoginTextInput 
                  inputlabel="Email"
                  inputicon={<BiMailSend />}
                  inputtype="text"
                  inputID=""
                  inputclass=""
                  inputvalue={email}
                  inputOnchange={(e) => Setemail(e.target.value)}
                  placeholder='someone@else.com'
               />
               <p className='error'>{emailErr}</p>
              </Col>
              <Button className='submitBtn' variant="light" onClick={() => forgotPass()}>Reset</Button>
              <Button className='cancelBtn' variant="light" onClick={()=>navigate(-1)}>Back To <span>Signin</span></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgotPassword;