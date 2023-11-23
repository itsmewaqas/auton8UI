import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.scss';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BiMailSend,BiMobileAlt } from "react-icons/bi";
import LoginTextInput from '../../sharedcomponent/LoginTextInput';

function Otp() {

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [email, Setemail] = useState('');
  const [emailErr, SetemailErr] = useState('');
  const [otp, Setotp] = useState('');
  const [otpErr, SetotpErr] = useState('');

  const clearValidation =()=>{
    SetemailErr('');
  }

  const optFunc = () => {
    clearValidation();
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr('please inter valid email address');
    }
    if (otp == "" || otp == undefined || otp.length == 0) {
      SetotpErr('please inter valid otp');
    }
    if (email != '' &&
       otp != '') {
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
            <h2>Activate Your Account</h2>
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
            <Col sm={12} className="my-3">
             <LoginTextInput 
                inputlabel="6 Digit OTP Code"
                inputicon={<BiMobileAlt />}
                inputtype="number"
                inputID=""
                inputclass=""
                inputvalue={otp}
                inputOnchange={(e) => Setotp(e.target.value)}
                placeholder='000000'
             />
             <p className='error'>{otpErr}</p>
            </Col>
            <Button className='submitBtn' variant="light" onClick={() => optFunc()}>Verify</Button>
            <Button className='cancelBtn' variant="light">Resend <span>Otp</span></Button>
            <Button className='cancelBtn' variant="light" onClick={()=>navigate(-1)}>Have an Account? <span>Signin</span></Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Otp;