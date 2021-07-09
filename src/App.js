import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const products =[
    {name: 'laptop', price: '$400'},
    {name: 'phone', price: '$430'},
    {name: 'headphone', price: '$300'},
  ]
  const productNames = products.map(pd => pd.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <h1>My Heading</h1>
        {
          products.map(pd => <li>{pd.name}</li>)
        }
        {
          products.map(pd => <Product product ={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person hero="Sakib Khan" heroin="Opu Bissas"></Person>
        <Person hero="Manna" heroin="Sabana"></Person>
        <Person hero="BappaRaz" heroin="Sabnur"></Person>
        <Person hero="Razzak" heroin="Diti"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <button onClick={() => setCount(count - 1)}>Decrese</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users:</h3>
      <ul>
        {
          users.map(user => <li>{user.username}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    width: '300px',
    height: '300px',
    margin: '10px'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return <div style={productStyle}>
    <h2>{name}</h2>
    <h4>{price}</h4>
    <button>Buy Now</button>
  </div>
}


function Person(cool){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'

  }
  return <div style={personStyle}>
    <h1>Hero: {cool.hero}</h1>
    <h3>Hero of {cool.heroin}</h3>
  </div>
}
export default App;
