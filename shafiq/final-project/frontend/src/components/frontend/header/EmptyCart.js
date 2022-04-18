import React from 'react'

const EmptyCart = ({handleCartClose}) => {
  return (
    <form className="minicart-empty">
        <button type="button" className="minicart-closer" onClick={handleCartClose}>×</button>      
        <div className="minicart-footer">                    
          <p className="minicart-empty-text">Your shopping cart is empty</p>            
        </div>  
    </form> 

  )
}

export default EmptyCart