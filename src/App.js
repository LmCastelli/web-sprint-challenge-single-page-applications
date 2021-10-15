import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Link, Route, Switch} from 'react-router-dom'

import HomePage from './HomePage'
import PizzaForm from './PizzaForm'
import Schema from './Schema'

const App = () => {






  
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path={'/pizza'}>
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
