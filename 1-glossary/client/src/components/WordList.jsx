import React from 'react';
import WordListItem from './WordListItem.jsx'


class WordList extends React.Component {
  constructor(props) {
    super(props)



  }






  render() {
    return (
      this.props.data.map((word) => {

        const handleClick = (event) => {
          this.props.handleDelete(word._id)
          console.log(word)
        };


        return (
          <ul key={word.word}>
            <WordListItem wordId={word._id} word={word} handleEdit={this.props.handleEdit}/>
            <button type='button' onClick={handleClick} >Delete</button>
          </ul>
        )
      })
    )
  }
}

export default WordList;