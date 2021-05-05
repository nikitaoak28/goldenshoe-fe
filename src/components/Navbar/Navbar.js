import React ,{useState}from 'react';
import logo from './logo.svg';
import './Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder";
import {Link} from 'react-router-dom';



const Navbar = ({isSignedIn}) =>{
    const [showLinks,setShowLinks] =useState(false);
  if(isSignedIn===true)
  {
    return(
      <nav className='Navbar'>
          <div className='leftSide'>
            <Link to="/" >
             <img className='logo navLink' alt='logo' src={logo} />  
             </Link>
             <Link to="/" className='navLink'>
            <div className="logo_text"><h1>Golden</h1><h1> Shoe</h1></div>
            </Link>
          </div>
          <div className='rightSide'>
            <div className='links no-underline' id={showLinks?"hidden":""}>
              <Link to="/signout" className='navLink'>
                  <li>Signout</li>
              </Link> 
              <Link to="/shop" className='navLink'>
                  <li>Shop</li>
              </Link>
              <Link to="/wishlist" className='navLink'>
                  <li>Wish List</li>
              </Link>
              <Link to="/cart" className='navLink'>
                  <li>Cart</li>
              </Link>    
            </div>  
            <button onClick={() => setShowLinks(!showLinks)}>                      
                <ReorderIcon/>
                </button>
          </div>
      </nav>
    );
  }
  else{
    return(
      <nav className='Navbar'>
          <div className='leftSide'>
            <Link to="/" >
             <img className='logo navLink' alt='logo' src={logo} />  
             </Link>
             <Link to="/" className='navLink'>
            <div className="logo_text"><h1>Golden</h1><h1> Shoe</h1></div>
            </Link>
          </div>
          <div className='rightSide'>
          <div className='links no-underline' id={showLinks?"hidden":""}>
              <Link to="/signin" className='navLink'>
                  <li>Signin</li>
              </Link>
              <Link to="/register" className='navLink'>
                  <li>Register</li>
              </Link>   
              <Link to="/shop" className='navLink'>
                  <li>Shop</li>
              </Link>
              <Link to="/wishlist" className='navLink'>
                  <li>Wish List</li>
              </Link>
              <Link to="/cart" className='navLink'>
                  <li>Cart</li>
              </Link>       
          </div>  
            <button onClick={() => setShowLinks(!showLinks)}>                      
                <ReorderIcon/>
                </button>
          </div>
      </nav>
    );
  }
}

export default Navbar;