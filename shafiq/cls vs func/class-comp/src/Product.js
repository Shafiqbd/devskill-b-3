import React, { Component } from "react";
import productList from './productList';

class Product extends React.Component{
  state = {
    products:[]
  }
  componentDidMount(){
    console.log("product component mount");
    this.setState({products: productList});
    setTimeout(()=>{
      console.log(this.state.products);
    },1000)


  }

  componentDidUpdate(){
    const handleProductDetails = (e)=>{
      e.preventDefault()
    console.log(e.target)
    }
  }


render(){
  return(
    <div>
      <h1>Product List</h1>
    {this.state.products.map((product, index) =>{
        return(
          <div key={index}>
            <p onClick = {()=>this.handleProductDetails(product)} >{product.name}</p>
          </div>
        )
      })
    }


     </div>
  );
}

}
export default Product;
