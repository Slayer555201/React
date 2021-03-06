import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableList from './TableList';
import Form from './Form';
import TablePage from './TablePage';
import Autorization from './Autorization';
import{
    Route,
    Switch,
    BrowserRouter
} from "react-router-dom"



class App extends Component {
  state = {
      characters: []
  };

  removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {
      const { characters } = this.state;
      
      return (
          <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Autorization}/>
              <Route exact path="/users" component={TablePage}/>
          </Switch>
          </BrowserRouter>
              
          
      );
  }
}


export default App;