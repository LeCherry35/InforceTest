import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.sass';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      {/* <Product></Product> */}
      <BrowserRouter>
        <Routes>
          <Route path='/productList' element={<ProductList></ProductList>}/>
          <Route path='/product/:id' element={<Product></Product>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
