import React from 'react';

class Form3 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }

  }

  handleClick = (event) => {
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


  render() {
    return (
      <div>
        <form>
          <label>Billing Info</label>
          <input placeholder='Credit Card #'></input>
          <input placeholder='Exp Date'></input>
          <input placeholder='CVV'></input>
          <input placeholder='Billing Zip Code'></input>
          <button onClick={this.handleClick}>Next</button>
        </form>
        {this.state.showForm ? <Form3 /> : null}
      </div>
    )
  }
}


export default Form3;