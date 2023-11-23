import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.scss';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';
import { BiUserCircle,BiMobileAlt,BiLock } from "react-icons/bi";
import LoginTextInput from '../../sharedcomponent/LoginTextInput';

function Signup() {

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [name, Setname] = useState('');
  const [nameErr, SetnameErr] = useState('');
  const [email, Setemail] = useState('');
  const [emailErr, SetemailErr] = useState('');
  const [password, Setpassword] = useState('');
  const [passwordErr, SetpasswordErr] = useState('');

  const clearValidation =()=>{
    SetnameErr('');
    SetemailErr('');
    SetpasswordErr('');
  }

  const signupFunc = () => {
    clearValidation();
    if (name == "" || name == undefined || name.length == 0) {
      SetnameErr('please inter your name');
    }
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr('please inter valid email address');
    }
    if (password == "" || password == undefined || password.length == 0) {
      SetpasswordErr('please inter password');
    }
    if (name != '' &&
        email != '' &&
        password != '') {
      navigate('/');
    }
  }

  useEffect(() => {
  }, [])

  const signup = () => {
    console.log('signup');
  }

  return (
    <div>
    <Container fluid>
      <Row>
        <Col md={12}>
          <div className='formArea clearfix'>
          <h1>Auton<span>8</span></h1>
           <div className='formAreaInside'>
            <h2>Create an account</h2>
            <Col sm={12} className="my-3">
             <LoginTextInput 
                inputlabel="Name"
                inputicon={<BiUserCircle />}
                inputtype="text"
                inputID=""
                inputclass=""
                inputvalue={name}
                inputOnchange={(e) => Setname(e.target.value)}
                placeholder='John Doe'
             />
             <p className='error'>{nameErr}</p>
            </Col>
            <Col sm={12} className="my-3">
             <LoginTextInput 
                inputlabel="Email"
                inputicon={<BiMobileAlt />}
                inputtype="email"
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
                inputlabel="Password"
                inputicon={<BiLock />}
                inputtype="password"
                inputID=""
                inputclass=""
                inputvalue={password}
                inputOnchange={(e) => Setpassword(e.target.value)}
                placeholder='****************'
             />
             <p className='error'>{passwordErr}</p>
            </Col>
            <Button className='submitBtn' variant="light" onClick={() => signupFunc()}>Register</Button>
            <Button className='cancelBtn' variant="light" onClick={()=>navigate(-1)}>Have an Account? <span>Signin</span></Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Signup;