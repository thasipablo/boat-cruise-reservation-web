import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  handleSubmit = (event) => {
    const {
      name,
      email,
      password,
      passwordConfirmation,
    } = this.state;
    axios.post('http://localhost:4000/signup', {
      user: {
        name,
        email,
        password,
        passwordConfirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('registration response', response);
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
    const {
      name, email, password, passwordConfirmation,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="name" name="name" placeholder="Name" value={name} onChange={this.handleChange} required />
          <br />
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} required />
          <br />
          <input type="password" name="passwordConfirmation" placeholder="Password confirmation" value={passwordConfirmation} onChange={this.handleChange} required />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
