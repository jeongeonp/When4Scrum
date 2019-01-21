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



  render() {

    const responseGoogle = (res) => {
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
  
    const responseFail = (err) => {
      console.error(err);
    }

    return (
      <main className="login-template">
        <div className="vCenterItems">
          LOGIN WITH {" "}
          
          <GoogleLogin
            clientId="966186460976-7p410jpe034ffbstn4g0kgq7s7il4492.apps.googleusercontent.com"
            buttonText="GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseFail}
          />

        </div>
        
        <div className="marginTop">
          User: {this.state.name}
          </div>
      </main>
    );
  }
}

export default LoginTab;