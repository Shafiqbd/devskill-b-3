import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderContent, HeaderTitle, HeaderWrap } from "../../../components/common/common-css";
import { getDeleteCategory } from "../../../redux/actions/categorys/categoryAction";
import { setCategoryList } from "../../../redux/actions/categorys/categoryListAction";
const Categories = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.categoryStore);

  useEffect(() => {
    dispatch(setCategoryList());
  }, []);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    { field: "name", headerName: "Name", flex: 2 },
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
      dispatch(getDeleteCategory(params._id));
    },
    []
  );

  const editRow = React.useCallback(
    (params) => () => {
      setTimeout(() => {
        navigate(`/admin/EditCategory/${params._id}`);
      }, 100);
    },
    []
  );

  const addCategory = () => {
    navigate("/admin/AddCategory", { replace: true });
  };

  return (
    <div>
      <HeaderWrap>
        <HeaderContent>
          <h3>Category List</h3>
        </HeaderContent>

        {/* for list page */}
        <HeaderTitle>
          <Button variant="contained" onClick={addCategory} type="button">
            Add Category
          </Button>
        </HeaderTitle>
      </HeaderWrap>

      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={categoryList}
          columns={columns}
          pageSize={10}
          getRowId={(rows) => rows._id}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
};

export default Categories;
