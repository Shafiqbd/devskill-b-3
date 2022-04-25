import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HeaderContent, HeaderTitle, HeaderWrap } from "../../../components/common/common-css";
import { getDeleteProduct } from "../../../redux/actions/products/productAction";
import { setProductList } from "../../../redux/actions/products/productListAction";
import { REMOVE_PRODUCT_MODEL } from "../../../redux/contants/action-type";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.productStore);

  useEffect(() => {
    dispatch(setProductList("", "asc"));
  }, []);

  const addProduct = () => {
    dispatch({
      type: REMOVE_PRODUCT_MODEL,
    });
    navigate("/admin/product", { replace: true });
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Category",
      flex: 2,
      renderCell: (params) => {
        const category = params.row.category;
        if (category) {
          return category.name;
        }
      },
    },
    { field: "title", headerName: "Product Name", flex: 2 },
    { field: "image", headerName: "Image", flex: 2 },
    { field: "price", headerName: "Price", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "description", headerName: "Description", flex: 2 },
    {
      field: "actions",
      headerName: "Action",
      type: "actions",
      flex: 0.5,
      getActions: (params) => [
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={deleteRow(params.row)} showInMenu />,
        <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={editRow(params.row)} showInMenu />,
      ],
    },
  ];

  const deleteRow = React.useCallback(
    (params) => () => {
      dispatch(getDeleteProduct(params._id));
    },
    []
  );

  const editRow = React.useCallback(
    (params) => () => {
      setTimeout(() => {
        navigate(`/admin/product/${params._id}`);
      }, 100);
    },
    []
  );

  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>Product List</h3>
        </HeaderContent>

        {/* for list page */}
        <HeaderTitle>
          <Button variant="contained" onClick={addProduct} type="button">
            Add Product
          </Button>
        </HeaderTitle>
      </HeaderWrap>

      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={productList}
          columns={columns}
          pageSize={10}
          getRowId={(rows) => rows._id}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  );
};

export default ProductList;
