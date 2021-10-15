import React from "react";
import {Link} from 'react-router-dom'

export default function HomePage() {

    
    return (
        <div className="header">
            <div>
                <h1>Lambda Eats</h1>
                <button>Home</button>
            </div>
            <div className="imgWrapper">
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b7/6f/ec/margherita.jpg" alt="Yummy Pizza"></img>
                <Link to={'/pizza'}>
                    <button>Yeah that pizza looks yummy</button>
                </Link>
            </div>
            <div className="OtherFoodOptions">
                <div className="optionWrapper">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b7/6f/ec/margherita.jpg" alt="otherFood"></img>
                    <p>Does this food look as good as that pizza though?</p>
                </div>
                <div className="optionWrapper">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b7/6f/ec/margherita.jpg" alt="otherFood"></img>
                    <p>Does this food look as good as that pizza though?</p>
                </div>
                <div className="optionWrapper">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b7/6f/ec/margherita.jpg" alt="otherFood"></img>
                    <p>Does this food look as good as that pizza though?</p>
                </div>
                <div className="optionWrapper">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b7/6f/ec/margherita.jpg" alt="otherFood"></img>
                    <p>Does this food look as good as that pizza though?</p>
                </div>
            </div>
        </div>
    )
}