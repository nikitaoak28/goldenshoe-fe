import React from 'react'
import './Productlist.css'
import Product from './Product.js'


const Productlist = ({shoes}) =>{
    return(
        <div>
        {           
          shoes.map((brandname, i) => {
            return (
              <Product
                key={i}
                brandname={shoes[i].brandname}
                country={shoes[i].country}
                sizeCountryNum={shoes[i].sizeCountryNum}
                price={shoes[i].price}  
                quantity={shoes[i].quantity} 
                photourl={shoes[i].photourl}           
                />
            );
          })
        }
      </div>      
    );
}
export default Productlist;

