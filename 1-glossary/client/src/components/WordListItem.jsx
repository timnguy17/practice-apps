import React from 'react';



class WordListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editWord: '',
      editDefinition: '',
      editForm: false
    }

  }

  handleWordChange = (event) => {
    this.setState({
      editWord: event.target.value
    })
  }

  handleDefinitionChange = (event) => {
    this.setState({
      editDefinition: event.target.value
    })
  }



  toggleEditForm = (event) => {
    if (this.state.editForm === false) {
      this.setState({
        editForm: true
      })
    } else {
      this.setState({
        editForm: false
      })
    }
  };




  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleEdit(this.props.wordId, { word: this.state.editWord, definition: this.state.editDefinition })
  }


  render() {
    return (
      <div>
        <li onClick={this.toggleEditForm}> {this.props.word.word} : {this.props.word.definition}</li>
        <form onSubmit={this.handleSubmit}>
          <label>Edit Form
            {
              this.state.editForm ? (
                <div>
                  <input type='text' onChange={this.handleWordChange}></input>
                  <input type='text' onChange={this.handleDefinitionChange}></input>
                  <button type='submit'>Edit</button>
                </div>
              ) : (null)
            }
          </label>
        </form>
      </div>
    )
  }
}


export default WordListItem;