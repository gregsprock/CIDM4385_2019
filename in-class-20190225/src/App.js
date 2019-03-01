import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import 'bootstrap'

class App extends Component {
  state = {
    email: '',
    password: '',
    // formErrors: { email: '', password: '' },
    // emailValid: false,
    // passwordValid: false,
    // formValid: false,
    formresults: ''
  }

  emailHandler = (e) => {
    const value = e.target.value;
    return this.setState({ email: value });
  }

  passHandler = (e) => {
    const value = e.target.value;
    return this.setState({ pass: value });
  }
  // validateField(fieldName, value) {

  //   let fieldValidationErrors = this.state.formErrors;
  //   let emailValid = this.state.emailValid;
  //   let passwordValid = this.state.passwordValid;
  //   let emailRegex = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //   let mediumRegex = new RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.{8,})");

  //   switch (fieldName) {
  //     case 'email':
  //       emailValid = value.match(emailRegex);
  //       fieldValidationErrors.email = emailValid ? '' : ' invalid email';
  //       break;
  //     case 'password':
  //       passwordValid = value.match(mediumRegex);
  //       fieldValidationErrors.password = passwordValid ? '' : ' needs 8 characters or more, at least 1 number, and one capitalized letter';
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState({
  //     formErrors: fieldValidationErrors,
  //     emailValid: emailValid,
  //     passwordValid: passwordValid
  //   }, this.validateForm);
  // }

  // validateForm() {
  //   this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  // }

  handleClick = (e) => {
    e.preventDefault();
    const formresults = "Email: " + this.state.email;
    this.setState({ formresults: formresults });
  }

  render() {
    return (
      <div className="App">
        <div className="form-group rounded m-4">
          <h1><Form onEmailChange={this.emailHandler}
                    onPassChange={this.passHandler}
                    onClick={this.handleClick} /></h1>
        </div>
        <p className="container" id="results">{this.state.formresults}</p>
      </div>
    );
  }
}

export default App;
