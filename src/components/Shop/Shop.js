import React from 'react';
import Productlist from './Productlist.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Searchbox from './Searchbox'
import Filter from '../Filter/Filter'

import 'tachyons'
class Shop extends React.Component {
    constructor(){
        super()
        this.state={
        shoes:[],
        searchfield:'', 
       searchColumn:'',
       selectedBrand:'',
       selectedSize:'',
        albumId: 1,
        }
    }

    fetchNextSet = () => {
        fetch(`http://localhost:3001/photos`)  
        .then(response=> response.json())
        .then(photos => this.setState({shoes: this.state.shoes.concat(photos)}));
        this.setState({albumId: this.state.albumId+1});
      }
      
    componentDidMount() {
        this.fetchNextSet();
    }
    
    onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
   
    console.log(this.state.searchfield)
    }
    onBrandChange = (event) => {
        this.setState({ selectedBrand: event.target.value })    
        console.log(this.state.selectedBrand);
    }
    onSizeChange = (event) => {
        this.setState({ selectedSize: event.target.value })   
        console.log(this.state.selectedSize); 
    }

    render(){
        const {shoes, searchfield,selectedBrand,selectedSize} = this.state;    
        const filteredShoes = shoes.filter(shoe =>{
            return Object.keys(shoe).some(key => {
                    return shoe[key].toString().toLowerCase().includes(searchfield.toLowerCase() || selectedBrand.toLowerCase() || selectedSize.toLowerCase() );
            })
        })
        
        /*
        return shoe.brandname.toLowerCase().includes(searchfield.toLowerCase());
        */
        return !shoes.length ? <h1>Loading</h1> 
        :(
            <div className='flex justify-between'> 
                <div className='ma3'>
                       <Filter brandChange={this.onBrandChange} sizeChange={this.onSizeChange}/>
                </div>
                <div>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <InfiniteScroll
                    dataLength={this.state.shoes.length}
                    next={this.fetchNextSet}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}>
                        <Productlist shoes={filteredShoes}/>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }    
}

export default Shop;