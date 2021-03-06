import React from 'react';

class LoginForm extends React.Component{

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (ev) => {
    this.props.onLoginSubmit(this.state.email, this.state.password);
    ev.preventDefault();
  }

  //Set state of the email and password fields
  handleInput = (ev) => {
    switch(ev.target.name){
      case 'email':
        this.setState({email: ev.target.value})
        break;
      case 'password':
        this.setState({password: ev.target.value})
    }
  }

  render(){
    return(
      <form id='login' className='input-group' onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          name="email"
          id="email"
          type="email"
          className="input-field"
          placeholder='Enter Email'
        />
        <input
          onChange={this.handleInput}
          name="password"
          id="password"
          type="password"
          className="input-field"
          placeholder='Enter Password'
        />
      <button className="submit-btn">Login</button>
      </form>
    );
  }
}


export default LoginForm
