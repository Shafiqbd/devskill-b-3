import React from "react";

const CheckoutProductCalculation = ({ cartListData }) => {
  const products = cartListData ? cartListData.products : [];
  let total = 0;
  return (
    <ul>
      {products.map((item, index) => {
        const { productId } = item;
        total += productId.price;
        return (
          <li>
            Product{index + 1} <i>-</i> <span>৳{productId.price}</span>
          </li>
        );
      })}
      <li>
        Total Service Charges <i>-</i> <span>৳0</span>
      </li>
      <li>
        Total <i>-</i> <span>৳{total}</span>
      </li>
    </ul>
  );
};

export default CheckoutProductCalculation;
