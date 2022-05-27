import React from 'react';
import Form1 from './Form1.jsx';


class App extends React.Component {
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
        <div>
          checkout app!
          <button onClick={this.handleClick}>Checkout</button>
          {this.state.showForm ? <Form1 /> : null}
        </div>
      </div>
    )
  }
}

export default App;