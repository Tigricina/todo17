import React, { Component } from 'react';
import { Link } from 'react-router';
import logInAction from '../actions/logInAction';
import AuthStore from '../authStore';

class AuthPage extends Component {
  componentWillMount() {

    this.state = {
      authState: AuthStore.Auth,
      user: AuthStore.user


    };
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      authState: AuthStore.Auth,
      user: AuthStore.user
    })
  }

  authoriz = () => {
    let user = this.myLogin.value;
    let password = this.myPassword.value;
    if (user !== '') {
      if (localStorage.getItem(user)) {
        var returnUser = JSON.parse(localStorage.getItem(user));
        if (password !== returnUser.password) {
          alert('wrong password')
        }
      }


      logInAction.logIn(user);

      var userInfo = {
        login: user,
        password: password,
        todoList: []
      };

      var userData = JSON.stringify(userInfo); //сериализуем его

      localStorage.setItem(user, userData);

    }

  }

  render() {
    return (
      <div id='a1'>
        <h3> Please log </h3>
        <label> User name: </label>
        <input type='text' ref={(input) => this.myLogin = input} />
        <label> Password: </label>
        <input type='password' ref={(input) => this.myPassword = input} />
        <br />
        <br />
        <Link to={this.state.authState ? '/list' : ''}><input type='button' value='Welcome' onClick={this.authoriz} /></Link>
      </div>
    );
  }
}

export default AuthPage;
