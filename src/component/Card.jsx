import "./Card.css"
const Card = ({product,setcart}) => {
  const updatecart=()=>{
    setcart((olddata)=>[...olddata,product])
  }
  return (
    <div className='card-style'>
      <div className="card">
      <img src={product.image} alt={product.name} />
      <div className='card-bottom'>
         <h5>{product.name}</h5>
      <p>Price: {product.price}</p>
      <button className='add-cart' onClick={updatecart}> + Add Cart</button>
      </div>
     
      </div>
 
      </div>
  )
}

export default Card