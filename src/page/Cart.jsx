import React, { useState } from 'react'
import "./Cart.css"

const Cart = ({cart,setcart}) => {
  const [no,nostate]=useState("no itme is ther")
  const removeCart = (id) => {
  setcart((olddata) =>
    olddata.filter((product) => product.id !== id)
  );
};

const totalamount= cart.reduce((total,product)=>{
  return total + Number(product.price)
},0)
   
  return (
    <>
      <section className='cart'>
        <div className="card-item">
            <div className="top-cart">
            <h1>Cart Product <span>{cart.length} </span></h1>
            <h1><span>{totalamount}</span> Total Amount </h1>
            
        </div>
        { cart.length > 0 ?(

             cart.map((product)=>(
              <div className='imgtext' key={product.id}>
           <div className="img">
          <img src={product.image} alt={product.name} />
        </div>
          <div className="cartdetails">
            <h3>{product.name} </h3>
            <p>Price: {product.price} </p>
            <button onClick={()=>removeCart(product.id)}>Remove Item</button>
          </div>
       </div>
        ))
        ):
        (
          <p className='nocontent'>No item is there :(</p>
        )}
        
      
       

        </div>
        
      </section>
    </>
  )
}

export default Cart