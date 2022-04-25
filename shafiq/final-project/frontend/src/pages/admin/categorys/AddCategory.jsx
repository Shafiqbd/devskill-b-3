import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryForm from "../../../components/admin/categorys/CategoryForm";
import { HeaderContent, HeaderWrap } from "../../../components/common/common-css";
import { addCategoryInfo } from "../../../redux/actions/categorys/categoryAction";
import { REMOVE_CATEGORY } from "../../../redux/contants/action-type";

const AddCategory = () => {
  const navigate = useNavigate();
  const { categoryModel } = useSelector((state) => state.categoryStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: REMOVE_CATEGORY,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategoryInfo(categoryModel));

    // setTimeout(() => {
    //   navigate("/admin/categories");
    // }, 1000);
  };

  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>Add Category</h3>
        </HeaderContent>
      </HeaderWrap>

      <CategoryForm categoryModel={categoryModel} handleSubmit={handleSubmit} />
    </>
  );
};

export default AddCategory;
