import React from "react";
import { GlobalVariable } from "../../../UtilityClass/ApiConnectionClass";

const CheckoutTable = ({ cartListData }) => {
  const apiRootUrl = GlobalVariable.LOCAL_API_URL;
  const products = cartListData ? cartListData.products : [];

  return (
    <table className="timetable_sub">
      <thead>
        <tr>
          <th width="10%">SL No.</th>
          <th width="20%">Product</th>
          <th width="10%">Quality</th>
          <th width="45%">Product Name</th>
          <th width="15%">Price</th>
          {/* <th width="5%">Remove</th> */}
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => {
          const { productId } = item;
          return (
            <tr className={`rem${index + 1}`} key={index}>
              <td className="invert">{index + 1}</td>
              <td className="invert-image">
                <a href="single.html">
                  <img
                    src={`${apiRootUrl}${productId.image}`}
                    style={{ height: "91px", width: "auto", maxWidth: "none" }}
                    className="img-responsive"
                  />
                </a>
              </td>
              <td className="invert">
                <div className="quantity">
                  <div className="quantity-select">
                    {/* <div className="entry value-minus">&nbsp;</div> */}
                    <div className="entry value">
                      <span>{item.quantity}</span>
                    </div>
                    {/* <div className="entry value-plus active">&nbsp;</div> */}
                  </div>
                </div>
              </td>
              <td className="invert" style={{ textAlign: "left" }}>
                {productId.title}
              </td>

              <td className="invert">৳{productId.price}</td>
              {/* <td className="invert">
                <div className="rem">
                  <div className="close1"> </div>
                </div>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CheckoutTable;
