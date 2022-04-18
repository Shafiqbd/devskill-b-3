import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../../assets/product.css";
import ProductItem from "../../components/frontend/product/ProductItem";
import { setProductList } from "../../redux/actions/products/productListAction";

const ProductContent = styled.div`
  // padding: 0 !important;
`;

const ProductHeaderContent = styled.div`
  & h3 {
    text-transform: uppercase;
    padding-bottom: 5px;
    font-size: 24px;
  }
`;

const ProductItemCol = styled.div`
  margin-bottom: 3em;
`;

const Products = () => {
  const [hasMore, setHasMore] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productStore);
  const { category } = useSelector((state) => state.categoryStore);
  // const { user } = useSelector((state) => state.storageStore);

  useEffect(() => {
    dispatch(setProductList(id));
  }, [id]);

  //// For pagination mathod
  // const fetchMoreData = async (e) => {
  //   if (productList.length >= 80) {
  //     this.setHasMore(false);
  //     return;
  //   }

  //   dispatch({
  //     type: SET_PRODUCTS,
  //     payload: id ? productList.concat(await getCategoryByProductList(id)) : productList.concat(await getAllProductList())
  //   });
  // }

  return (
    <ProductContent className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
      <ProductHeaderContent>{category ? <h3>{category.name}</h3> : <h3>All</h3>}</ProductHeaderContent>

      <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
        {/* <InfiniteScroll
          dataLength={productList.length}
          next={fetchMoreData}
          hasMore={hasMore}>
            {
              productList.map((item, index) => (
                <ProductItemCol className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd" key={index}>
                  <ProductItem productData={item} handleAddTocart={handleAddTocart} />
                </ProductItemCol>
              ))
            }
          </InfiniteScroll> */}
        {productList.map((item, index) => (
          <ProductItemCol className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd" key={index}>
            <ProductItem productData={item} />
          </ProductItemCol>
        ))}
      </div>
    </ProductContent>
  );
};

export default Products;
