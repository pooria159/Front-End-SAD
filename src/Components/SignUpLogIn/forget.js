import React, { Component } from 'react'
import '../../Styles/SignUpLogIn/SignUpLogIn.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class Forget extends Component{
  constructor(props) {
    super(props);
  this.state = {
    email:'',
  
    emailError:'',
    
  };
  // this.handPassword = this.handPassword.bind(this);
}
 
  handleEmailInput = e =>{
    this.setState({email:e.target.value});
  }

  // handPassword(event) {
  //   const value = event.target.value;
  //   if ( value.length > 8) {
  //     this.setState({ passwordError: 'The Password should not exceed 8 characters.' });
  //   } 
  //   if (value.length <= 8) {
  //     this.setState({ password: value, passwordError: '' });
  //   }
  // }

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



  myURL=()=>{
    document.location.href = './verification'
  }



  sumbitButton(event){
    event.preventDefault();
    const email=document.getElementById('email-signup').value;
    axios.post(`http://127.0.0.1:8000/auth/users/reset_password/`, 
    {
        "email": email,
    }
    , {headers:{  'Content-Type' : 'application/json' }})
    .then(res => {
      toast.success('Congratulations! Your sign-up was successful! '
      ,  {
        onClose: () => {
          window.location.replace("./verification");
        },
        autoClose: 5000
      },
      
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





 

  render() {
    return (
      <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
      <form>
        <div className='Forget'>
        <h3><b>Forget</b></h3>
        </div>
        <div className="mb-1">
        <ion-icon name="mail"></ion-icon>
        &nbsp;
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            onChange={this.handleEmailInput && this.handleEmailChange}
            value={this.state.email}
            id="email-signup"
          />
          <div className='error'>{this.state.emailError}</div>
        </div>
        <div className="d-grid">
          <button  type="submit" disabled={!this.state.email || this.state.emailError} onClick={this.sumbitButton}>
            Click
          </button>
        </div>
      </form>
      </div>
        </div>
       
      </div>
    )
  }
}