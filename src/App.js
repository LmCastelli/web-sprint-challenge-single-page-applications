import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Link, Route, Switch} from 'react-router-dom'
import * as yup from 'yup'

import HomePage from './HomePage'
import PizzaForm from './PizzaForm'
import Schema from './Schema'

// Initial States

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  olives: false,
  sausage: false,
  special: ''
}
const initialErrors = {
  name: '',
  size: ''
}

const orderList = [];
const initialDisabled = true;

const App = () => {
  const [order, setOrder] = useState(orderList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrder([res.data, ...orderList]);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setFormValues(initialFormValues);
    })
  }

  const validate = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
      .then(() => setErrorValues( { ...errorValues, [name]: ""}))
      .catch(err => setErrorValues( { ...errorValues, [name]: err.errors[0]}))
  }

  const change = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      specialInstructions: formValues.specialInstructions
    }

    postNewOrder(newOrder);
  }

  useEffect(() => {
    Schema.isValid(formValues).then(valid => setDisabled(!valid))
  },[formValues])


  
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path={'/pizza'}>
          <PizzaForm values={formValues} change={change} submit={formSubmit} errors={errorValues} disabled={disabled}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
