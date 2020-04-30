import React, { Component } from 'react'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Footer } from './components/Footer'
import { Switch, Route } from "react-router-dom";
import 'bulma/css/bulma.css'
import './assets/App.css';

class App extends Component {
 render () {
   return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default App;
