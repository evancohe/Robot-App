import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    return (<div className="App" >
      <CardList robots={this.state.robots} />

    </div >)
  };
}

export default App;
