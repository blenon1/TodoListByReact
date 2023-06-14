import React, { Component } from 'react'

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      items: [],
    };
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput],
    });
  }

  renderTodos() {
    return this.state.items.map((item) => {
      return (
        <div className='Tableau' key={item}>
            {item} | <button className='Supprimer' onClick={this.deleteTodo.bind(this)}>Supprimer</button>
        </div>
      )
    });
   
  }

  deleteTodo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }



  render() {
    return (
      <div>
        <h1 className='1-title'>William Todo List</h1>
        <form>
          <input 

           value={this.state.userInput}

           type="text"

           placeholder="votre tache" 

           onChange={this.onChange.bind(this)}
           
          />

          <button onClick={this.addTodo.bind(this)}>Ajouter</button>

        </form>
        <div className='Tache'>
          <p>Ma liste de tache</p>
          {this.renderTodos()}
        </div>

      </div>
      
    )
  }
}

export default Todolist
