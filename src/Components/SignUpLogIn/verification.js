import React, { Component } from 'react'
import '../../Styles/SignUpLogIn/SignUpLogIn.scss'

export default class Verification extends Component {
  constructor(props) {
    super(props);

    this.state = {
   pas1:'',
   pas2:'',
      matchError:'',
      passError:''
      
    };
    
   
   
    this.match= this.match.bind(this);
    this.handPassword = this.handPassword.bind(this);
    
  }
  handPassword(event) {
    const value = event.target.value;
    if ( value.length > 8) {
      this.setState({ passError: 'The last name should not exceed 8 characters.' });
    } 
    if (value.length <= 8) {
      this.setState({ pas1: value, passError: '' });
    }
  }
  match(event) {
    const value = event.target.value;
    
    if(value.length<= this.state.pas1.length){
    if (this.state.pas1 !== value) {
      this.setState({pas2: value, matchError: 'Passwords do not match.' });
      if(value.length<1)
        {
          this.setState({pas2:value})
        }
        if(value.length==0){
          this.setState({matchError:''})
        }
    } else {
      this.setState({ pas2: value, matchError: '' });
    }
    
  }
  }
  
 

checkpass1 = o =>{
  this.setState({pas1: o.target.value});
}
checkpass2 = o =>{
  this.setState({pas2: o.target.value});
}










render() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
    <form>
      <div className='Verification'>
      <h3><b>Verification</b></h3>
      </div>
      <div className="mb-2">
      <ion-icon name="lock-closed"></ion-icon>
      &nbsp;
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          onChange={this.checkpass1 && this.handPassword}
          value={this.state.pas1}
        />
        <div className='error'> {this.state.passError}</div>
      </div>
      <div className="mb-2">
      <ion-icon name="lock-open"></ion-icon>
      &nbsp;
        <label>Confirm</label>
        <input
          type="password"
          className="form-control"
          placeholder="confirm"
          onChange={this.checkpass2 && this.match}
          value={this.state.pas2}
        />
        <div className='error'>{this.state.matchError}</div>
      </div>
      <div className="d-grid">
        <button  type="submit"  disabled={!this.state.pas1 || !this.state.pas2 || this.state.matchError  }>
          Verification
        </button>
      </div>
    </form>
    </div>
        </div>
       
      </div>
    )
  }
}
