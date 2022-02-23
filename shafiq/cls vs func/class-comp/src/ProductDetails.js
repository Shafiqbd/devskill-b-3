import React, { Component } from "react";
import productList from './productList';

class ProductDetails extends React.Component{
  state ={
    name: '', 
    description: '',
    price: '',
    category: ''
  }
  componentDidMount(){
    console.log("product component mount");
    debugger;
    productList.map((el, index)=>{
      // this.setState(el);
      console.log("el", el);
    })
    
  }

render(){
  return(
    <div>
    {productList.map((el, index) =>{
        return(
          <div key = {el.index}>
            <p>{el.name}</p>
            <p>{el.price}</p>
          </div>
        )
      })
    }
     </div>
  );
}

}
export default Product;
