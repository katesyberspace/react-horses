import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Horses from './Horses'
import Horse from './Horse'

class App extends Component {

  constructor() {
    super()
    this.state = {
      horses: [
        {
          name: 'maythehorsebewithu',
          active: true,
          country: 'AUS',
          yearOfBirth: 2000,
          hourlyRate: 30,
          hoursWorked: 2000    
        },
        {
          name: 'my wife knows everthing',
          active: true,
          country: 'USA',
          yearOfBirth: 2007,
          hourlyRate: 50,
          hoursWorked: 2500    
        },
        {
          name: 'arrrrr',
          active: true,
          country: 'USA',
          yearOfBirth: 2004,
          hourlyRate: 30,
          hoursWorked: 2000        
        }
      ]
    }
  }
  



  render() {
    const { horses } = this.state

    return (
      <div className="App">
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/horses">Horses</Link>
          <Link to="/about">About</Link>
        </nav>

        <main>
          <Switch>
            <Route exact path="/" render={()=><Home />}/>
            <Route exact path="/horses" render={()=><Horses horses={horses} stuff={'stuff'}/>}/>          
            <Route 
              path="/horses/:name" 
              render={(props) => <Horse {...props} horses={horses}/>}
            />          
            <Route path="/about" render={()=><About />}/>
          </Switch>
        </main>

      </div>
    );
  }


}

export default App;
