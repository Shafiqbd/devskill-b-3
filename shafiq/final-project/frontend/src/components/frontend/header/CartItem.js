import React from "react";

const CartItem = ({ itemData }) => {
  const { productId } = itemData;
  return (
    <li className="minicart-item">
      <div className="minicart-details-name">
        <a className="minicart-name" href="#">
          {productId.title}
        </a>
        <ul className="minicart-attributes">
          <li>Discount: 0.00</li>
        </ul>
      </div>
      <div className="minicart-details-quantity">
        <input className="minicart-quantity" type="text" value={itemData.quantity} readOnly />
      </div>
      <div className="minicart-details-remove">
        <button type="button" className="minicart-remove">
          ×
        </button>
      </div>
      <div className="minicart-details-price">
        <span className="minicart-price">৳{productId.price}</span>
      </div>
    </li>
  );
};

export default CartItem;
