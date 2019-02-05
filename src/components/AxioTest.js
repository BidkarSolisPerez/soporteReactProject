import React, { Component } from "react";
import axios from 'axios';

class AxioTest extends Component{
    constructor() {
        super();
        this.state = {
          jobs: []
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
      axios({
        method: 'get',
        url: 'https://jobs.github.com/positions.json?description=python&location=new+york',
        crossdomain: true,
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Origin': 'https://jobs.github.com'
        }
      })
      .then(response => this.setState({jobs: response.data}))
    }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click me</button>
        <p>{this.state.jobs[0]}</p>
      </div>
    )
  }

}


export default AxioTest;
