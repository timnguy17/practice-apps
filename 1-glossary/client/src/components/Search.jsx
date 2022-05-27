import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchStr: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchStr: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //send http get req to server to check db for word
    this.props.handleSearch(this.state.searchStr);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Glossary
          <input type='text' onChange={this.handleChange} ></input>
          <button type='submit'> Search Glossary </button>
        </label>
      </form>
    );
  }

}

export default Search;