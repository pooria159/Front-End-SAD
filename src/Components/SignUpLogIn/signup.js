import React, { Component, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/SignUpLogIn/SignUpLogIn.scss'
import { Alert } from 'flowbite-react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";



export default class SignUp extends Component
 {
 constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname:'',
      email:'',
      luser:'',
      password:'',
      emailError: '',
      FnameError: '',
      LnameError:'',
      FnameError1:'',
      LnameError2:'',
      passwordError:'',
      lconfirm:'',
      UserError:'',
      confirmError:''
      
    };
    
   
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handPassword = this.handPassword.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleLConfirm= this.handleLConfirm.bind(this);
    
  }
  
  handleLConfirm(event) {
    const value = event.target.value;
    
//    if(value.length<= this.state.password.length){
    if (this.state.password !== value) {
      this.setState({lconfirm: value, confirmError: 'Passwords do not match.' });
      if(value.length<1)
        {
          this.setState({lconfirm:value})
        }
        if(value.length==0){
          this.setState({confirmError:''})
        }
    } else {
      this.setState({ lconfirm: value, confirmError: '' });
    }
    
//  }
  }
  
  
  handleFirstNameChange(event) {
    
    
    const value1 = event.target.value;
   
    if(!/^[A-Za-z_]*[A-Za-z][A-Za-z _]*$/.test(value1) || value1.length >35)
    {
      
    
       this.setState({FnameError1:'Invalid input. (only letters and spaces and less than 35 char)' });
      //   <div class="popup">
      //   <a href="#">Hover me!</a>
      //   <div class="popup-content">{this.state.FnameError1}</div>
      // </div>
        if(value1.length<1)
        {
          this.setState({fname:value1})
        }
        if(value1.length==0){
          this.setState({FnameError1:''})
        }

      
      

    }

  
    else if(/^[A-Za-z_]*[A-Za-z][A-Za-z _]*$/.test(value1)){
      this.setState({fname:value1, FnameError1:''})
    }

    

    
  }


  handPassword(event) {
    const value = event.target.value;
    if ( value.length < 8) {
      this.setState({ password: value, passwordError: 'Password should not be less than 8 characters.' });
    } 
    if (value.length >= 8) {
      this.setState({ password: value, passwordError: '' });
    }
    if(value !== this.state.lconfirm){
      this.setState({password:value , confirmError : 'Password do not match'});
    }
    if(value == this.state.lconfirm){
      this.setState({password:value , confirmError : ''});
    }
  }

  handleLastNameChange(event) {
    const value1 = event.target.value;
   
    if(!/^[A-Za-z_]*[A-Za-z][A-Za-z _]*$/.test(value1) || value1.length >35)
    {
      

        this.setState({LnameError:'Invalid input. (only letters and spaces and less than 35 char)' });
        if(value1.length<1)
        {
          this.setState({lname:value1})
        }
        if(value1.length==0){
          this.setState({LnameError:''})
        }

      
      

    }
   

  
    else if(/^[A-Za-z _]*[A-Za-z][A-Za-z _]*$/.test(value1)){
      this.setState({lname:value1, LnameError:''})
    }

    

  }
   handleUserName(event){
      const value = event.target.value;
      if(value.indexOf(' ') >= 0){
        this.setState({UserError:'Username Invalid !'})
        
      }
      else{
        this.setState({luser:value, UserError:''})

      }
     
    }
  handleEmailChange = (event) => {
    // const showemail = ''
    const email = event.target.value;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailRegex.test(email)) {
      this.setState({
        emailError: "Invalid Email [example@example.com]",
        email: email,
        showemail : 'ShowError'
      });
      if(email.length==0){
        this.setState({emailError:''})
        this.setState({showemail:''})
      } 
    }
 
    else {
     
      this.setState({
        emailError: "",
        showemail:'',
        email: email
      });
    }
  };
 
 











  


  handleLUserInput = e =>{
    this.setState({luser: e.target.value});
  }
  handleLConfirmInput = e =>{
    this.setState({lconfirm:e.target.value});
  }
  handleFNameInput = e => {
    this.setState({ fname: e.target.value });
  }
  handleLNameInput = e =>{
    this.setState({lname: e.target.value});
  }
  handleEmailInput = e =>{
    this.setState({email:e.target.value});
  }
  handlePasswordInput = e =>{
    this.setState({password: e.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    // this.setState({ fname: '' });
    // this.setState({ submitted: true });
    // this.setState({ submitted: true });

    // submit form
  }
  
    // onClickHandler=()=>{(window.location.href="/sign-in")}
  
    // handleSignUpClick = () => {
    //   const { history } = this.props;
    //   history.push('./sign-in');
    // }

    myURL=()=>{
      document.location.href = './sign-in'
    }







    sumbitButton(){
      const username=document.getElementById('username-signup').value;
      const email=document.getElementById('email-signup').value;
      const password=document.getElementById('password-signup').value;
      const repeatPass=document.getElementById('repeat-password-signup').value;
      axios.post(`http://127.0.0.1:8000/auth/users/`, 
      {
          "email": email,
          "username": username,
          "password": password,
          "re_password": repeatPass
      }
      , {headers:{  'Content-Type' : 'application/json' }})
      .then(res => {
        toast.success('Congratulations! Your sign-up was successful! '
        , 
        
        {
          position: "top-right",
          autoClose: 5000,
          className: 'toast-message',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
       
          // className: 'toast-message',
          // autoClose: 5000,
          // hideProgressBar: false,
          // closeOnClick: true,
          // pauseOnHover: true,
          // draggable: true,
          
          // progress: undefined,
          // theme: "light",
          },
//          setTimeout(this.myURL, 6000)
//            useNavigate("/sign-in")
          window.location.replace('/sign-in')
          );
                console.log(res);})

      .catch(err =>
          {
              //message.error(err.message);
              console.error(err);
              toast.error('Error! Your sign-up was not successful!',
              {
                className:'toast-message',
              
              })
          });
//      this.CheckSubmission(username,email,password,repeatPass);
  }

  /*CheckSubmission(username,email,password,repeatPass){
      if(password!=repeatPass){
          return "Wrong";
      }
      else{
          axios.post(`http://127.0.0.1:8000/auth/users/`, 
          {
              "email": email,
              "username": username,
              "password": password,
              "re_password": repeatPass
          }
          , {headers:{  'Content-Type' : 'application/json' }})
          .then(res => {
                    console.log(res);
        toast.success('Congratulations! Your sign-up was successful! '
        , 
        
        {
          position: "top-right",
          autoClose: 5000,
          className: 'toast-message',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
       
          // className: 'toast-message',
          // autoClose: 5000,
          // hideProgressBar: false,
          // closeOnClick: true,
          // pauseOnHover: true,
          // draggable: true,
          
          // progress: undefined,
          // theme: "light",
          },
          setTimeout(this.myURL, 6000)
          );


              let token = res.data.auth_token;
              localStorage.setItem('token', token);                
              localStorage.setItem('username',username);
              window.location = '/sign-in';          
                
          })
          .catch(err =>
          {
              //message.error(err.message);
              console.error(err);
              toast.error('Error! Your sign-up was not successful!',
              {
                className:'toast-message',
              
              })
          });
          return "Correct";

      }
  }*/




    
  render() {
 
// Add a CSS class to change the border color to red
    // const{submitted}=this.state;
    return (
      <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
      <form 
      // action='/sign-in' 
      onSubmit={this.handleSubmit}
      >
        <h3><b>Sign Up</b></h3>
        {/* <div className="mb-3">
        <ion-icon name="person"></ion-icon>&nbsp;
        
          <label>First name</label> */}
          

          {/* <input
            type="text"
            onChange={this.handleFNameInput  && this.handleFirstNameChange  }
            value={this.state.fname}
            className="form-control"
            placeholder="first name"
          />
        </div>
         */}
        
        
        {/* <div className="mb-3">
        <ion-icon name="person"></ion-icon>&nbsp;
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="last name"
        onChange={this.handleLNameInput && this.handleLastNameChange }
         value={this.state.lname}
          />
        </div> */}
         
        <div className="mb-3">
        <ion-icon name="person"></ion-icon>&nbsp;
          <label>Username</label>
          <input
            type="text"
            onChange={this.handleLUserInput && this.handleUserName}
            value={this.state.luser}
            className="form-control"
            placeholder="username"
            id="username-signup"
          />
          <div className="error" >{this.state.UserError}</div>
        </div>
        
        
      
  <div className="mb-1">
    <ion-icon name="mail"></ion-icon>&nbsp;
    <label>Email address</label>
    <input
      type="email"
      className="form-control"
      placeholder="email"
      onChange={this.handleEmailInput && this.handleEmailChange }
      value={this.state.email}
      id="email-signup"
    />
    <div className="error" >{this.state.emailError}</div>
  </div>

        

           
      
        
  <div className="mb-2">
          <div className="labelo">
        <ion-icon name="lock-closed"></ion-icon>&nbsp;
          <label>Password</label>
          
          
          </div>
          
            
          <div calss="input-container">
          <input
            type="password"
            className={"form-control"}
            placeholder="password"
            onChange={this.handlePasswordInput && this.handPassword}
            value={this.state.password}
            id="password-signup"
          />
          <div className="error">{this.state.passwordError}</div>
          <ion-icon name="lock-open"></ion-icon>&nbsp;
          <label>Confirm</label>
          
          
          <input
          
              type="password"
              className="form-control"
              placeholder="confirm"
              onChange={this.handleLConfirmInput &&this.handleLConfirm }
              value={this.state.lconfirm}
              id="repeat-password-signup"
            />
             <div className="error" >{this.state.confirmError}</div>

            </div>
          
        </div>
        
        
        <div className="d-grid">
          <button 
          onClick={this.sumbitButton}
          // onClick={this.onClickHandler}
            disabled={
            // !this.state.fname || !this.state.lname ||
            !this.state.email || 
          !this.state.password ||
           !this.state.luser
            || !this.state.lconfirm
            ||this.state.emailError || 
            // this.state.FnameError || this.state.LnameError ||this.state.LnameError2 || this.state.FnameError1 ||
            this.state.passwordError
            //  ||this.state.UserError
              || this.state.confirmError}
           
           type="submit">
          
           Sign Up
            
          </button>
          <ToastContainer />
          
        </div>
        <p className="forgot-password text-right">
          Already registered ? <a href="/sign-in">Click here to Sign in</a>
        </p>
      </form>
      </div>
        </div>
       
      </div>
      
    )
    
  }
  
}