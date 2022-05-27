import React from 'react';
import Form2 from './Form2.jsx';
import axios from 'axios';


class Form1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      name: '',
      email: '',
      password: ''
    }

  }

  handleClick = (event) => {
    event.preventDefault();
    if (this.state.showForm === false) {
      this.setState({
        showForm: true
      })
    } else {
      this.setState({
        showForm: false
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('clicked')

    axios.post('/user', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then((response) => {
      console.log('success submit user')
    }).catch((err) => {
      console.log
    })
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleNameChange} placeholder='Name'></input>
          <input onChange={this.handleEmailChange} placeholder='Email'></input>
          <input onChange={this.handlePasswordChange} placeholder='Password'></input>
          <button type='submit'>Submit</button>
          <button type='button' onClick={this.handleClick}>Next</button>
        </form>
        {this.state.showForm ? <Form2 /> : null}
      </div>
    )
  }
}


export default Form1;