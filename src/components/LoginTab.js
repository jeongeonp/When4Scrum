import React, { Component } from 'react';
import './LoginTab.css';
import GoogleLogin from 'react-google-login';

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
    /*const update =(res) => {
      console.log("THIS IS BEING CALLED")
      console.log(res.googleId)
      this.props.onUpdate(res.googleId)
      this.setState({id: res.googleId})
    }*/

    const responseGoogle = (res) => {
      this.setState({
        id: res.googleId,
        name: res.profileObj.name,
        provider: 'google'
      });
      this.props.onUpdate(res.googleId)
      console.log("THIS IS BEING CALLED")
      /////here
      //console.log("id: " + this.state.id + " name: " + this.state.name)
      
  
      /*axios.post('/signin', {
        id: this.state.id,
        name: this.state.name
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
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