import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm (props) {
    const {
        values, 
        submit, 
        change,
        errors,
        disabled
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

    return (
        <div className="PizzaFormContainer">
            <div className="pizzaHeader">
                <h1>Heyo</h1>
                <Link to={'/'}>
                    <button>Home</button>
                </Link>
            </div>
            <form id="pizza-form" onSubmit={onSubmit}>
                <div className="errorMessages">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
                <div>
                    <h2>Make your pizza!</h2>
                    <img src="" alt="pizza pizza"></img>
                </div>
                <div>
                    <h2>Who's this pizza for?</h2>
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
                <div className="toppingContainer">
                    <h2>Choose your toppings!</h2>
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
                </div>
                <div className="specialInstructions">
                    <h2>Special Instructions</h2>
                    <label>Special Instructions
                        <input 
                            type="text"
                            name="specialInstructions"
                            onChange={onChange}
                            value={values.specialInstructions}
                        />
                    </label>
                </div>
                <div className="submit">
                    
                    <button disabled={disabled}>Add to Order</button>
                </div>
            </form>
        </div>

    )
}