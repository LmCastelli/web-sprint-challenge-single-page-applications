import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

export default function HomePage() {

    const Container = styled.div`
        width:80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 10%;
    `
    const HeaderDiv = styled.div`
        width: 100%;
        display: flex;
        justify-content:space-between;
        background-color: white;
        font-size: large;
        
        button {
            font-size: larger;
        }
    `
    const ImgDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const PizzaImg = styled.img`
        width: 80%;
    `
    const OrderButton = styled.button`
        margin-top: 15%;
        margin-bottom: 15%;
        font-size: larger;
        border-radius: 20px;
    `
    const OtherFood = styled.div`
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `
    const EachOption = styled.div`
        width: 40%;
        display:flex;
        flex-wrap: wrap ;
        text-align: center;
        justify-content: center;
        font-size: large;
    `
    const OptionImage = styled.img`
        width: 100%;

    `
    return (
        <Container>
            <HeaderDiv>
                <h1>Lambda Eats</h1>
                <div>
                    <button>Home</button>
                    <button>Help</button>
                </div>
            </HeaderDiv>
            <ImgDiv>
                <PizzaImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Large_pizza.jpg/1600px-Large_pizza.jpg" alt="Yummy Pizza"></PizzaImg>
                
            </ImgDiv>
            <Link to={'/pizza'}>
                <OrderButton id="order-pizza">Order Pizza</OrderButton>
            </Link>
            <OtherFood>
                <EachOption>
                    <OptionImage src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=" alt="otherFood"></OptionImage>
                    <p>Does this food look as good as that pizza though?</p>
                </EachOption>
                <EachOption>
                    <OptionImage src="https://media.istockphoto.com/photos/all-you-can-eat-sushi-picture-id1053854126?k=20&m=1053854126&s=612x612&w=0&h=haaqa5FkUXZjz1xvVFvvodNvV8vITqeenXsXOeuYdTU=" alt="otherFood"></OptionImage>
                    <p>Does this food look as good as that pizza though?</p>
                </EachOption>
                <EachOption>
                    <OptionImage src="https://media.istockphoto.com/photos/grilled-striploin-steak-picture-id535786572?k=20&m=535786572&s=612x612&w=0&h=WAOuIsIUQB7zVW23C6MX9y5QCyl6KLPL2eYcOcc_Qdk=" alt="otherFood"></OptionImage>
                    <p>Does this food look as good as that pizza though?</p>
                </EachOption>
                <EachOption>
                    <OptionImage src="https://media.istockphoto.com/photos/two-fresh-salad-bowls-picture-id919666108?k=20&m=919666108&s=612x612&w=0&h=6mW9Xz3d-KTDyFm94Is5ptTzZtfZvRl2fUMwpKAnI5g=" alt="otherFood"></OptionImage>
                    <p>Does this food look as good as that pizza though?</p>
                </EachOption>
            </OtherFood>
        </Container>
    )
}