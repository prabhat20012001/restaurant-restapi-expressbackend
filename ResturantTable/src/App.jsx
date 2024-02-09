
import React, { useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [price,setPrice]=useState('')
  const [dish,setDish]=useState('')
  const [table,setTable]=useState('table1')

  function addToBill(){
    const order={
      PRICE:price,
      DISH:dish,
      TABLE:table
    }
    console.log(order)
  }

  return (
    <>
    <div className="container">
      <h2>Order Form</h2>
      <div className="form-group">
        <label htmlFor="price">Choose Price:</label>
      </div>        <input type="number" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} />

      <div className="form-group">
        <label htmlFor="dish">Choose Dish:</label>
        <input type="text" id="dish" value={dish} onChange={(e)=>setDish(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="table">Choose Table:</label>
        <select id="table" value={table} onChange={(e)=>setTable(e.target.value)}>
          <option value="table1">Table 1</option>
          <option value="table2">Table 2</option>
          <option value="table3">Table 3</option>
        </select>
      </div>
      <button onClick={addToBill}>Add to Bill</button>
    </div>
    {/* Table sections */}
    <div className="container container2">
      <div id="table1-section" className="table-section">
        <h3>Table 1 Orders</h3>
      </div>
      <div id="table2-section" className="table-section">
        <h3>Table 2 Orders</h3>
      </div>
      <div id="table3-section" className="table-section">
        <h3>Table 3 Orders</h3>
      </div>
    </div>
  </>
  
  )
}

export default App
