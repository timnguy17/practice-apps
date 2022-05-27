import React from 'react';
import Search from './Search.jsx'
import AddWords from './AddWords.jsx'
import axios from 'axios';
import WordList from './WordList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: []
    }
  }


  componentDidMount = () => {
    axios.get('/glossary')
      .then((response) => {
        console.log('sucessfully got all glossary')
        this.setState({
          words: response.data,
        })
      }).catch((err) => {
        console.log(err)
      })
  };

  updateWords = () => {
    axios.get('/glossary')
    .then((response) => {
      console.log('sucessfully got all glossary')
      this.setState({
        words: response.data,
      })
    }).catch((err) => {
      console.log(err)
    })
  };

  handleSearch = (word) => {
    axios.post('/search', {word: word})
    .then((response)=>{
      this.setState({
        words: response.data
      })
    })
    .catch((err) =>{
      console.log(err)
    })
  };

  handleDelete = (word) => {
    console.log(word)
    axios.delete('/delete', {data: {_id: word}})
    .then((response) => {
      axios.get('/glossary')
      .then((responseTwo) => {
        console.log('sucessfully got all glossary after delete')
        this.setState({
          words: responseTwo.data,
        })
      }).catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })


    // axios.delete('/delete', {word: word.word, definition: word.definition})
    // .then((response) => {
    //   return axios.get('/glossary')
    // }
    // .then((response) => {
    //   console.log('sucessfully got all glossary after delete')
    //   this.setState({
    //     words: response.data,
    //   })
    // })
    // .catch((err) => {
    //   console.log(err)
    // });
  }

  handleEdit =(id, word) => {
    console.log(id, word)
    axios.post('/update', {id: id, word: word})
    .then((response) => {
      return axios.get('/glossary')
    })
    .then((response) => {
      this.setState({
        words: response.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }





  render() {


    return (
      <div>
        <div> Glossary App</div>
        <AddWords data={this.state.words} updateWords={this.updateWords} />
        <br></br>
        <Search handleSearch={this.handleSearch}/>
        <WordList handleDelete={this.handleDelete} data={this.state.words} handleEdit={this.handleEdit}/>
      </div>
    )
  }
}




export default App;