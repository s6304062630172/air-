
import Sidebar from "./component/sidebar/Sidebar";
import Product from "./pages/product/Product";
import Employee from "./pages/employee/Employee";
import Quotation from "./pages/quotation/Quotation";
import Detaildown from "./pages/quotation/Detaildown";
import React, { useState, useEffect } from 'react';
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    
    <BrowserRouter>
 
    <Routes>
    <Route>
      
      <Route path="/" element={<Sidebar />}></Route>
      <Route path="Product" element={<Product />} />
      <Route path="Employee" element={<Employee />} />
      <Route path="Quotation" element={<Quotation />} />
      <Route path="Detaildown" element={<Detaildown />}/>
      
    
    
    </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
