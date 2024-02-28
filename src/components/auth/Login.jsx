import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    const { email, password } = this.state;
    axios.post(
      'http://localhost:4000/login',
      {
        user: {
          email,
          password,
        },
      },
      {
        withCredentials: true, // Ensure this is set
      },
    ).then((response) => {
      console.log('login response', response);
      // Handle successful login, e.g., redirect to another page
    }).catch((error) => { console.log('error', error); });
    event.preventDefault();
    // Add your form submission logic here
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
