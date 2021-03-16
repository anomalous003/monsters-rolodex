import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box-component'
import './App.css.css'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Abheera'
        },
        {
          id: 2,
          name: 'Aditya'
        },
        {
          id: 3,
          name: 'Sonal'
        },
        {
          id: 4,
          name: 'Aniket'
        },
        {
          id: 5,
          name: 'Rohit'
        },
        {
          id: 6,
          name: 'Kartik'
        },
        {
          id: 7,
          name: 'Akash'
        },
        {
          id: 8,
          name: 'Aman'
        },
        {
          id: 9,
          name: 'Ram'
        },
        {
          id: 10,
          name: 'Sujal'
        }
      ],
      searchField: ''
    }
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          changeHandler={event => {
            this.setState({ searchField: event.target.value })
          }
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App