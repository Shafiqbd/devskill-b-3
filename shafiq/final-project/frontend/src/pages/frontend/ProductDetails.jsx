import React, { useEffect } from "react";
import Magnifier from "react-magnifier";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../../assets/product-details.css";
import AddToCartBtn from "../../components/frontend/product/AddToCartBtn";
import { setProductDetails } from "../../redux/actions/products/productDetailsAction";
import { GlobalVariable } from "../../UtilityClass/ApiConnectionClass";

const CategoryContent = styled.div`
  margin-top: 4px;
  margin-bottom: 10px;
  & p {
    margin-top: 0px;
  }
`;
const StarRatingContent = styled.div`
  width: 90px;
`;
const TitleContent = styled.div`
  & h5 {
    margin-bottom: 10px;
    font-size: 18px;
    text-transform: none;
  }
`;

const ProductDetails = () => {
  const apiRootUrl = GlobalVariable.LOCAL_API_URL;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.productStore);

  useEffect(() => {
    dispatch(setProductDetails(id));
  }, [id]);

  const StockContent = () => {
    if (details.stock > 0) {
      return (
        <div className="ready-to-ship-icon">
          <div className="icon-ins">In Stock </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className="agileinfo_single">
        <div className="col-md-4 agileinfo_single_left">
          <Magnifier src={`${apiRootUrl}${details.image}`} width="100%" />
          {/* <img id="example" src={`${rootUrl}assets/images/76.png`} alt=" " className="img-responsive" /> */}
        </div>
        <div className="col-md-8 agileinfo_single_right">
          <StockContent />
          <TitleContent>
            <h5>{details.title}</h5>
          </TitleContent>
          <CategoryContent className="w3agile_description">
            <h4>
              Category : <p>{details?.category?.name}</p>
            </h4>
          </CategoryContent>

          <div className="rating1">
            <StarRatingContent className="starRating">
              <input id="rating5" type="radio" name="rating" value="5" />
              <label for="rating5">5</label>
              <input id="rating4" type="radio" name="rating" value="4" />
              <label for="rating4">4</label>
              <input id="rating3" type="radio" name="rating" value="3" checked />
              <label for="rating3">3</label>
              <input id="rating2" type="radio" name="rating" value="2" />
              <label for="rating2">2</label>
              <input id="rating1" type="radio" name="rating" value="1" />
              <label for="rating1">1</label>
            </StarRatingContent>
          </div>
          <div className="w3agile_description">
            <h4>Description :</h4>
            <p>{details.description}</p>
          </div>
          <div className="snipcart-item block">
            <div className="snipcart-thumb agileinfo_single_right_snipcart">
              <h4>
                Price: {details.price}
                {/* <span>$25.00</span> */}
              </h4>
            </div>
            <div className="snipcart-details agileinfo_single_right_details">
              <AddToCartBtn productData={details} />
            </div>
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </>
  );
};

export default ProductDetails;
