import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart , setCart] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error));
  },[]);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div>
      <h1>Country Loaded: {countries.length}</h1>
      <h2>added country: {cart.length}</h2>
      <Cart cart = {cart} addedCountry = {cart.length}></Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} name={country.name}></Country>)
      }
    </div>
  );
}

export default App;