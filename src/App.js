import React from 'react';

import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import { Navbar,Sidebar } from './components';
import { Home,
    About,
    Cart,
    Checkout,
    Product,
    SingleProduct,
    Error
 } from './pages'
import SingleProductPage from './pages/SingleProductPage';


function App(){

    return (
        <Router>
          <Navbar />
          <Sidebar />
          <Switch>
            
            <Route exact path='/'>
                     <Home />
            </Route>
            <Route exact path='/products'>
                     <Product />
            </Route>
            <Route exact path='/about'>
                     <About />
            </Route>
            <Route exact path='/cart'>
                     <Cart />
            </Route>
            <Route exact path='/product/:id' children={<SingleProduct />} />
              
            <Route exact path='/checkout'>
                     <Checkout />
            </Route>

            <Route path="*">
             <Error />
            </Route>
          </Switch>
        </Router>
      );
}

export default App;