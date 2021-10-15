import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PizzaForm (props) {
    const {
        values, 
        submit, 
        change,
        errors,
        disabled,
    } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    
    const onChange = e => {
        const {name, value, checked, type} = e.target
        const valueToChange = type === "checkbox" ? checked : value
        change(name, valueToChange)
    }

    const FormContainer = styled.div`
        width:70%auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        border: 2px solid red;
    `
    const FormHeader = styled.div`
        width:100%auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            margin-left: 100%;
        }
    `
    const ErrorDiv = styled.div`
        font-size: larger;
        color: red;
    `
    const Toppings = styled.div`
        display: flex;
        justify-content: space-between;
    `
    const Submit = styled.div`
        button {
            margin-top: 5%;
            margin-bottom: 5%;
            font-size: larger;
        }
    `
    

    return (
        <FormContainer>
            <FormHeader>
                <h1>Great Choice!</h1>
                <Link to={'/'}>
                    <button>Home</button>
                </Link>
            </FormHeader>
            <form id="pizza-form" onSubmit={onSubmit}>
                <div>
                    <h2>Make your pizza!</h2>
                    <img src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=" alt="pizza pizza"></img>
                </div>
                <div>
                    <h2>Who's this pizza for?</h2>
                    <ErrorDiv>{errors.name}</ErrorDiv>
                    <label>Name:
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name="name"
                            type="text"
                            id="name-input"
                        />
                    </label>

                    <h2>What size ya feeling?</h2>
                    <ErrorDiv>{errors.size}</ErrorDiv>
                    <label>Size:
                        <select 
                            value={values.size}
                            onChange={onChange}
                            name="size"
                            id="size-dropdown"
                        >
                            <option value=''>-- Select a size --</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extraLarge">Extra Large</option>
                        </select> 
                    </label>
                </div>
                <h2>Choose your toppings!</h2>
                <Toppings>
                    <label>Sausage
                        <input 
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                            checked={values.sausage}
                        />
                    </label>
                    <label>Mushrooms
                        <input 
                            type="checkbox"
                            name="mushrooms"
                            onChange={onChange}
                            checked={values.mushrooms}
                        />
                    </label>
                    <label>Olives
                        <input 
                            type="checkbox"
                            name="olives"
                            onChange={onChange}
                            checked={values.olives}
                        />
                    </label>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>
                </Toppings>
                <div className="specialInstructions">
                    <h2>Special Instructions</h2>
                    <label>Special Instructions
                        <input 
                            type="text"
                            name="specialInstructions"
                            onChange={onChange}
                            value={values.specialInstructions}
                            id="special-text"
                        />
                    </label>
                </div>
                <Submit>
                    
                    <button id="order-button" disabled={disabled}>Add to Order</button>
                </Submit>
            </form>
        </FormContainer>

    )
}