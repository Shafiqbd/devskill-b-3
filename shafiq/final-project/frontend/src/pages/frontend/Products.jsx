import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../../assets/product.css";
import ProductItem from "../../components/frontend/product/ProductItem";
import SortProduct from "../../components/frontend/product/SortProduct";
import { setProductList } from "../../redux/actions/products/productListAction";

const ProductContent = styled.div`
  // padding: 0 !important;
`;
const ProductWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  flex-wrap: wrap;
`;
const ProductTitleFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // padding-bottom: 20px;
  width: 50%;
  & .product_filter {
    width: 50%;
  }
`;

const ProductHeaderContent = styled.div`
  width: 50%;
  & h3 {
    text-transform: uppercase;
    padding-bottom: 5px;
    font-size: 24px;
    text-align: left;
    :after{
      left: 0;
    }
  }
`;

const ProductItemCol = styled.div`
  margin-bottom: 3em;
`;

const Products = () => {
  const [hasMore, setHasMore] = useState(true);
  const [sorting, setSorting] = React.useState("asc");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productStore);
  const { category } = useSelector((state) => state.categoryStore);
  // const { user } = useSelector((state) => state.storageStore);

  useEffect(() => {
    dispatch(setProductList(id, sorting));
  }, [id]);

  const getSortByProduct = (sortValue) => {    
    dispatch(setProductList(id, sortValue));
  };

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
      <ProductWrap>
        <ProductHeaderContent>{category ? <h3>{category.name}</h3> : <h3>All</h3>}</ProductHeaderContent>

        <ProductTitleFilter>
          <div className="product_filter">
            <SortProduct getSortByProduct={getSortByProduct} sorting={sorting} setSorting={setSorting} />
          </div>
        </ProductTitleFilter>
      </ProductWrap>
      

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
