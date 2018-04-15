import React, { Component } from "react";

class Support extends Component{
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  };
  render () {
    return (
      <div>
      <div className="row">
      <div className="col-7">

      <form>
      <div className="form-group">
        <label htmlFor="nameForm">Name:</label>
        <input
          type='text'
          name='name'
          id="nameForm"
          placeholder="Enter your name here"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailForm">Email:</label>
        <input
          type='text'
          name='email'
          id="emailForm"
          placeholder="Enter email here"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="subjectForm">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subjectForm"
          placeholder="Enter your subject here"
          value={this.state.subject}
          onChange={this.handleChange}
          />
      </div>
      <div className="form-group">
        <label htmlFor="messageForm">Message:</label>
        <textarea
          rows={7}
          cols={50}
          name="message"
          id="messageForm"
          value={this.state.message}
          onChange={this.handleChange}
          />
      </div>
          <button type="submit" className="btn btn-primary">Send</button>
      </form>
      </div>

      <div className="col-5">
        <h1>Segunda columna</h1>
      </div>
      </div>

      <div className="row">
        <h1>Aca va un advice video</h1>
      </div>

      </div>
    );
  }
}



export default Support;
