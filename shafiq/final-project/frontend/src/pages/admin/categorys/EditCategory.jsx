import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoryForm from "../../../components/admin/categorys/CategoryForm";
import { HeaderContent, HeaderWrap } from "../../../components/common/common-css";
import { updateCategoryInfo } from "../../../redux/actions/categorys/categoryAction";
import { setCategoryDetails, setCategoryList } from "../../../redux/actions/categorys/categoryListAction";

const EditCategory = () => {
  const navigate = useNavigate();
  const { categoryModel } = useSelector((state) => state.categoryStore);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setCategoryDetails(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategoryInfo(categoryModel, id));
    dispatch(setCategoryList());
    navigate("/admin/categories");
  };

  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>Edit Category</h3>
        </HeaderContent>
      </HeaderWrap>

      <CategoryForm categoryModel={categoryModel} handleSubmit={handleSubmit} />
    </>
  );
};

export default EditCategory;
