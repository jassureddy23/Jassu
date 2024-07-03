import React, {useState} from 'react';
import {BrowsetrRouter , Route ,Routes } from 'react-router-dom';
import Allproducts from './Allproducts';
import Cart from './Cart';
function App () {
    const[cart,setcart] = useState([]);

    return(
        <BrowsetrRouter>
        <Routes>
            <Route path='/allproducts' element={<Allproducts cart={cart} setcart={setcart} />} />
            <Route path='/cart' element={<Cart cart={cart} />} />
            </Routes>
            </BrowsetrRouter>
    );
} 

export default App;