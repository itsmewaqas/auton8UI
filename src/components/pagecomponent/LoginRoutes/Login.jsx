import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import '../../../assets/css/style.scss';
import { BiUser,BiLock } from "react-icons/bi";
import { connect, useSelector, useDispatch } from 'react-redux';
import { languageSelect } from '../../../redux/Actions/index';
import LoginTextInput from '../../sharedcomponent/LoginTextInput';

function Login(props) {

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');

  const [emailErr, SetemailErr] = useState('');
  const [passwordErr, SetpasswordErr] = useState(''); 

  const [languageSle, SetlanguageSle] = useState('en');
  const [languageSleErr, SetlanguageSleErr] = useState('');

  const clearValidation =()=>{
    SetemailErr('');
    SetpasswordErr('');
    SetlanguageSleErr('');
  }

  const login = () => {
    clearValidation();
    var emailRgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email == undefined || email == "" || !emailRgx.test(email)) {
      SetemailErr('please inter valid email address');
    }
    if (password == "" || password == undefined || password.length == 0) {
      SetpasswordErr('please inter password');
    }
    if (languageSle == "" || languageSle == undefined || languageSle.length == 0) {
      SetlanguageSleErr('please select language');
    }
    if (email != '' &&
        password != '' &&
        languageSle != '') {
      navigate('/Insight');
      dispatch(languageSelect(languageSle));
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
              <h2>Login</h2>
              <Col sm={12} className="my-3">
               <LoginTextInput 
                  inputlabel="Email"
                  inputicon={<BiUser />}
                  inputtype="text"
                  inputID=""
                  inputclass=""
                  inputvalue={email}
                  inputOnchange={(e) => Setemail(e.target.value)}
                  placeholder='someone@else.com'
               />
               <p className='error'>{emailErr}</p>
               <Link className='dlink' to="/ForgotPassword" >Forgot Your Password?</Link> 
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
                  placeholder='*****************'
               />
               <p className='error'>{passwordErr}</p>
               <Link className='dlink' to="/Otp" >Account is not activated ?</Link>
              </Col>
              {/* <Col sm={12} className="my-3">
                <Form.Select value={languageSle} onChange={(e) => { SetlanguageSle(e.target.value) }}>
                  <option>Select Language</option>
                  <option value="en">En</option>
                  <option value="ar">Ar</option>
                </Form.Select>
                <p className='error'>{languageSleErr}</p>
              </Col> */}
              <Button className='submitBtn' variant="light" onClick={() => login()}>Signin</Button>
              <Button className='cancelBtn' variant="light" onClick={() => navigate('/Signup')}>Don’t have an account yet ? <span>Sign Up</span></Button>
              <h5><span>Or Sign In With</span></h5>
              <div class="d-flex justify-content-between">
                <Button className='otherLinks'>
                  <img src={require('../../../assets/images/search1.png')} alt="" />
                </Button>
                <Button className='otherLinks'>
                  <img src={require('../../../assets/images/github1.png')} alt="" />
                </Button>
                <Button className='otherLinks'>
                  <img src={require('../../../assets/images/microsoft1.png')} alt="" />
                </Button>
              </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;