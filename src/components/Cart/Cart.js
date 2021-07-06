import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = cart.reduce( (total, ppl) => total + ppl.population, 0);
    return (
        <div>
            <h2>Added Country: {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;