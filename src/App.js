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


function App(){

    return(
        <Router>
             <Navbar />
             <Sidebar />

             <Switch>

             </Switch>

        </Router>
    );
}

export default App;