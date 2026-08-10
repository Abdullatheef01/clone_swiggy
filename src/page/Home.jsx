import React from 'react'
import Product from  "../component/Product.json"
import Card from "../component/Card"
const Home = ({setcart}) => {

  
  return (
    <div className='home-container'>
        {Product.map((product)=>(
          <Card key={product.id} product={product} setcart={setcart}/>
        ))}
        
    </div>
  )
}

export default Home