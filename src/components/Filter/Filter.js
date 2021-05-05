import React  from 'react'
import './Filter.css'
import 'tachyons'

class Filter extends React.Component{
constructor(props){
    super()
    this.state={
        brands:[],
        selectedBrand:'',
        sizes:[],
        selectedSize:''
        
    }
}
    getBrandData = () => {
        fetch(`http://localhost:3001/brands`)  
        .then(response=> response.json())
        .then(
            data=> this.setState({brands: data})
            
            )  
            
    }
    getSizeData = () => {
        fetch(`http://localhost:3001/sizes`)  
        .then(response=> response.json())
        .then(
            data=> this.setState({sizes: data})          
            )      
            
    }
    componentDidMount(){
      this.getBrandData();
      this.getSizeData();
    }

    
render(){
    const {brandChange,sizeChange} = this.props;
    return(
        <div>
        <div>
            <h2 className="f5 lh-copy">Brand:</h2>
            <select className="db h2 f6 bg-near-white ba b--sliver gray" onChange={brandChange}>
                {this.state.brands.map((brand, i) => {
                    return <option key={i} value={brand.brandname}>{brand.brandname} </option>
                    })
                }
            </select>            
        </div>
        <div>
            <h2 className="f5 lh-copy">Size:</h2>
            <select className="db h2 f6 bg-near-white ba b--sliver gray" onChange={sizeChange}>
                {this.state.sizes.map((size, i) => {
                    return <option key={i} value={size.sizeCountryNum}>{size.sizeCountryNum} </option>
                    })
                }
                
            </select>    
        </div>  
        </div>
        );
    }
}

export default Filter;