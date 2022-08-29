import React from 'react'
import Product_card from '../data/Product';
const Content =()=>{
  const listitem= Product_card.map((item)=>
  <div className="card" key={item.id}>
<div className="card_img">
  <img src={item.img} alt="img" />
</div>
<div className="card_Header">
  <h2>{item.Product_name}</h2>
  <p>{item.description}</p>
  <p className='price'>{item.price}<span>{item.currency}</span></p>
</div>
<div className="btn">
  <input type="button" value="Add to Cart" />
</div>
  </div>
  );
  return(
    <div className="content">
     
      {listitem}
    </div>
  )
}
export default Content ;