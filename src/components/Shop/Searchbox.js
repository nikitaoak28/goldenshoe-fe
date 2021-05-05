import React from 'react';

const Searchbox =({ searchfield, searchChange })=>{
    return(
        <div className="flex justify-center">          
                <div className="fl w-50 w-third-ns pa2">
                    <input className='pa3 ba' type='search' placeholder='Search here' onChange={searchChange}/>
                </div>       
        </div> 
    );    
}
export default Searchbox;