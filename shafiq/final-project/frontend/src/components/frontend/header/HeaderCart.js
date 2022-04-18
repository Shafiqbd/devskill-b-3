import React from "react";
import MiniCart from "./MiniCart";

const HeaderCart = () => {
  const handleAddTocart = () => {
    document.body.classList.add("minicart-showing");
  };

  return (
    <>
      <div className="product_list_header">
        <fieldset>
          <input type="button" name="submit" value="View your cart" className="button" onClick={handleAddTocart} />
        </fieldset>
      </div>
      <MiniCart />
    </>
  );
};

export default HeaderCart;
