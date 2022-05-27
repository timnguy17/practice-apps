import React from 'react';
import Form3 from './Form3.jsx'
import axios from 'axios';


class Form2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
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
    axios.post('/address', {
      line1: this.state.line,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone
    })
    .then((response) =>{
      console.log('success posted address')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleLine1Change = (event) => {
    this.setState({
      line1: event.target.value
    })
  }
  handleLine2Change = (event) => {
    this.setState({
      line2: event.target.value
    })
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleStateChange = (event) => {
    this.setState({
      state: event.target.value
    })
  }

  handleZipChange = (event) => {
    this.setState({
      zip: event.target.value
    })
  }

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Shipping Address</label>
          <input onChange={this.handleLine1Change} placeholder='line1'></input>
          <input onChange={this.handleLine2Change} placeholder='line2'></input>
          <input onChange={this.handleCityChange} placeholder='City'></input>
          <input onChange={this.handleStateChange} placeholder='State'></input>
          <input onChange={this.handleZipChange} placeholder='Zip'></input>
          <input onChange={this.handlePhoneChange} placeholder='Phone Number'></input>
          <button type='submit'>Submit</button>
          <button onClick={this.handleClick}>Next</button>
        </form>
        {this.state.showForm ? <Form3 /> : null}
      </div>
    )
  }
}


export default Form2;