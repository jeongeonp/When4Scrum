import React, { Component } from 'react';
import './LoginTab.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      provider: ''
    }
  }

  responseGoogle = (res) => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: 'google'
    });

    axios.post('/signin', {
      id: this.state.id,
      name: this.state.name
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  responseFail = (err) => {
    console.error(err);
  }

  render() {
    return (
      <main className="login-template">
        <div className="vCenterItems">
          <h1>LOGIN WITH GOOGLE</h1>
      
        <GoogleLogin
          clientId="966186460976-7p410jpe034ffbstn4g0kgq7s7il4492.apps.googleusercontent.com"
          buttonText="GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseFail}
        />

        </div>
      </main>
    );
  }
}

/*
const LoginTab = ({form, children}) => {
  return (
    <main className="login-template">
      <div className="vCenterItems">
        For Login
        <button>Login</button>
      </div>
      
    </main>
  );
};
*/

export default LoginTab;