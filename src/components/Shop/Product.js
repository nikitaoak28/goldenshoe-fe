import React from 'react';
//import shoeimage from './shoe2.jpeg'

 
const Product = ({ brandname, country,sizeCountryNum, price,quantity,photourl}) => {
  return (
   <div className='tc bg-light-gray br3 pa3 ma2 dib bw2 shadow-5'>
      {/*<img alt='robots' src={`https://robohash.org/${price}?size=200x200`} />*/}
      <img className='imgshoe' alt='shoes' src={'./assets/' + photourl } />
      <div className='ws-normal'>
        <div className='flex justify-around'>
            <label>Brand: {brandname}</label>
            <label>Price:{price}</label>
        </div>
        <div className='flex justify-around' >
          <label>Size: {sizeCountryNum} </label>
         
          <label className={(quantity==='In stock'? 'green': 'red')}>{quantity}</label>
         
        </div> 
        <div className='flex justify-end pa2' >
        {quantity==='In stock'? 
          <button className='f12 link dim ph1 pv1 mb1 dib black bg-gold'>Buy Now</button>
          : <button className='f12 link ph1 pv1 mb1 dib black bg-white' disabled>Not Available</button>
        }
          
        </div>
      </div>
    </div>
  );
  
}





export default Product;
