import React from 'react';
import axios from 'axios';

class AddWords extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: ''
    }
    // this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    // this.handleWordChange = this.handleWordChange.bind(this);

  }

  handleWordChange = (event) => {
    this.setState({
      word: event.target.value
    })
  }

  handleDefinitionChange = (event) => {
    this.setState({
      definition: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //perorm http req to server to add word/def to db
    // axios.post()
    axios.post('/newWords', {word: this.state.word, definition: this.state.definition})
    .then((response) => {
      this.props.updateWords();
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Add Words
        <br></br>
        <label>
          Word:
          <input type='text' onChange={this.handleWordChange}></input>
        </label>
        <br></br>
        <label>
          Definition:
          <input type='text' onChange={this.handleDefinitionChange}></input>
          <button type='submit'>Add to Glossary</button>
        </label>

      </form>
    )
  }

}

export default AddWords;