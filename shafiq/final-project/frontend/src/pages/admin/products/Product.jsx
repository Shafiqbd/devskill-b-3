import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../../components/admin/products/ProductForm';
import { HeaderContent, HeaderWrap } from '../../../components/common/common-css';
import { addProductInfo, updateProductInfo } from '../../../redux/actions/products/productAction';
import { setSingleProductModel } from '../../../redux/actions/products/productDetailsAction';
import { GlobalVariable } from '../../../UtilityClass/ApiConnectionClass';

const Product = () => {
  const apiRootUrl = GlobalVariable.LOCAL_API_URL;  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{id} = useParams();
  const { productModel } = useSelector((state) => state.productStore);
  // debugger
 
  useEffect(() => {
    if (id) {
      dispatch(setSingleProductModel(id));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(await addProductInfo(productModel));
    }else{
      dispatch(await updateProductInfo(productModel, id));
      navigate("/admin/product-list");
    }
    
  };
  

  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>Product</h3>
        </HeaderContent>      
      </HeaderWrap>
      <ProductForm productModel={productModel} handleSubmit={handleSubmit} />
    </>
  )
}

export default Product