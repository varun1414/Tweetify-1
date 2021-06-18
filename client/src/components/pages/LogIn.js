import React from 'react'
import {GoogleLogin } from 'react-google-login'
import Service1 from './Service1'
import {Form,Button} from 'react-bootstrap'
import '../../App.css';
import '../Login.css';
import Footer from '../Footer'

const clientID='669860009090-vi91dgmrm7sl1lmqko4u89o2n2uucihq.apps.googleusercontent.com'
function LogIn() {
    const success=(res)=>{
      console.log(res.profileObj)
      window.location.href="/dashboard";
    }
    const fail=(res)=>{
      console.log(res)
    }


    return (
      <div style={{'background-color': '#212529'}}>
   
<div className="form__box">
  <div className="form__container">
<Form>
<Form.Group controlId="formBasicEmail" bsPrefix="form__element">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text bsPrefix="form__message">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword" bsPrefix="form__element">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox" bsPrefix="form__element">
  <Form.Check type="checkbox" label="Check me out"  />
</Form.Group>
<div className="form__submit">
<Button variant="dark" type="submit">
  Submit
</Button>
</div>
</Form>
<div className="form__submit">
<GoogleLogin
        clientId={clientID}
        buttonText="login"
        onSuccess={success}
        onFailure={fail}
        cookiePolicy={'single_host_origin'}
        
        />
        </div>
</div>

      
</div>
      ]
</div>
  )



  }

export default LogIn
