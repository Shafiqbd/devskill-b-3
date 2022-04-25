import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderContent, HeaderTitle, HeaderWrap } from '../../../components/common/common-css';
import { getAllUserList, getDeleteUser } from '../../../redux/actions/users/userActions';
import { REMOVE_USER_MODEL } from '../../../redux/contants/action-type';

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userStore);

  useEffect(() => {
    dispatch(getAllUserList());
  }, []);

  const addUser = () => {
    dispatch({
      type: REMOVE_USER_MODEL,
    });
    navigate("/admin/user", { replace: true });
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },   
    { field: "role", headerName: "Role", flex: 1 }, 
    { field: "username", headerName: "User Name", flex: 1 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      valueGetter: (params) =>
        `${params.row.firstname || ''} ${params.row.lastname || ''}`,
    },    
    { field: "email", headerName: "Email", flex: 2 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "fulladdress",
      headerName: "Address",
      flex: 2,
      valueGetter: (params) =>
        `${params.row.address.city || ''}${params.row.zipcode ? "-" : ""}${params.row.zipcode || ''}${params.row.number ? ", " : ""}${params.row.number || ''}`,
    },
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
      dispatch(getDeleteUser(params._id));
    },
    []
  );

  const editRow = React.useCallback(
    (params) => () => {
      setTimeout(() => {
        navigate(`/admin/user/${params._id}`);
      }, 100);
    },
    []
  );

  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>User List</h3>
        </HeaderContent>

        {/* for list page */}
        <HeaderTitle>
          <Button variant="contained" onClick={addUser} type="button">
            Add User
          </Button>
        </HeaderTitle>
      </HeaderWrap>

      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={userList}
          columns={columns}
          pageSize={10}
          getRowId={(rows) => rows._id}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  )
}

export default UserList