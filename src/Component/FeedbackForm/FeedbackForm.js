// FeedbackForm.js

import React, { Component } from 'react';
import './FeedbackForm.css';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send feedback data to server
  }

  render() {
    return (
        <>
        <div className="countainers" id="faq" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/faq_bg.jpg'})`}}>
      {/* <div class="countainer">       */}
        <div class="headings">
            <h2 class ="hea">FeedBack Form</h2>
        </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div> 
      </>
    );
  }
}

export default FeedbackForm;
