import React from 'react';
import './App.css';
import Menu from './containers/Menu/Menu';
import Cart from './containers/Cart/Cart';

const App = () => {

  return (
    <div className="App">
       <div className='interface'>
            <div className="boxes">
               <Menu/>
            </div>
            <div className="boxes">
                <Cart/>
            </div>
        </div>
    </div>
  );
}

export default App;
