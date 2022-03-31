import {Fragment, useState} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';



function App() {
  const [cartState , setCart] = useState(false);

  const cartButtonHandler = (value)=>{
    setCart(value); 
  }

  return (
<Fragment>
  {cartState &&  <Cart cart={cartButtonHandler} />}
  <Header cart={cartButtonHandler}  />
  <main>
    <Meals />
  </main>
</Fragment>
  );
}

export default App;
