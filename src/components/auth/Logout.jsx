import React, { Component } from 'react';
import axios from 'axios';

export default class Logout extends Component {
  handleLogout = (event) => {
    axios.post(
      'http://localhost:4000/logout',
      {},
      {
        withCredentials: true,
      },
    ).then((response) => {
      console.log('logout response', response);
      // Perform any additional actions upon successful logout, e.g., redirecting to another page
    }).catch((error) => {
      console.log('error', error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Logout Page</h1>
        <button type="submit" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
