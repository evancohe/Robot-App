import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (<div className="App" >

      <SearchBox
        placeholder="Search Robots"
        handleChange={e => this.setState({ searchField: e.target.value })} />

      <CardList robots={filteredRobots} />

    </div >
    )
  };
}

export default App;
