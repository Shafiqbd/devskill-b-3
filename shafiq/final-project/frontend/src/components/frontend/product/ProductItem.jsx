import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { GlobalVariable } from "../../../UtilityClass/ApiConnectionClass";
import AddToCartBtn from "./AddToCartBtn";

const ProdutWrapper = styled.div`
  & img {
    height: 250px;
    width: 100%;
  }
`;
const NoWarpText = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const ProductItem = ({ productData }) => {
  const apiRootUrl = GlobalVariable.LOCAL_API_URL;
  const navigate = useNavigate();

  const productWiseDetails = (id) => {
    navigate("/ProductDetails/" + id);
  };

  return (
    <ProdutWrapper>
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <div className="snipcart-thumb" onClick={() => productWiseDetails(productData._id)}>
                  <a>
                    <img src={`${apiRootUrl}${productData.image}`} alt=" " className="img-responsive" />
                  </a>
                  <NoWarpText>{productData.title}</NoWarpText>
                  <h4>৳{productData.price} </h4>
                </div>
                <div className="snipcart-details">
                  <AddToCartBtn productData={productData} />
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </ProdutWrapper>
  );
};

export default ProductItem;
