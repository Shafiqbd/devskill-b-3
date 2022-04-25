import EditIcon from "@mui/icons-material/Edit";
import { Chip } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderContent, HeaderWrap } from "../../components/common/common-css";
import { setOrderList, updateStatusOrder } from "../../redux/actions/orderListActions";

const OrderList = () => {
  const dispatch = useDispatch();
  const { orderList } = useSelector((state) => state.orderStore);

  useEffect(() => {
    dispatch(setOrderList());
  }, []);

  
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: 'fullName',
      headerName: 'User',
      flex: 1,
      valueGetter: (params) =>
        `${params.row.userId?.firstname || ''} ${params.row.userId?.lastname || ''}`,
    },
    { field: "date", headerName: "Order Date", flex: 1,
      renderCell: (params) => {
        return moment(params.row.date).format("DD-MMM-YYYY");
      }
    },
    { field: "status", headerName: "Status", flex: 1,
      renderCell: (params) => {
        const statusName = params.row.status === 0 ? <Chip label="pending" color="primary" /> 
                          : params.row.status === 1 ? <Chip label="success" color="success" />
                          : <Chip label="reject" color="error" />
        return statusName;
      }
    },
    {
      field: "actions",
      headerName: "Action",
      type: "actions",
      flex: 0.5,
      getActions: (params) => [
        <GridActionsCellItem icon={<EditIcon />} label="Successfully"
         onClick={editRowSuccess(params.row)} showInMenu />,
        <GridActionsCellItem icon={<EditIcon />} label="Rejected" 
        onClick={editRowRejected(params.row)} showInMenu />,
      ],
    },
  ];

  const editRowSuccess = React.useCallback(
    (params) => () => {   
      params.status = 1; 
      dispatch(updateStatusOrder(params));
    },
    []
  );
  const editRowRejected = React.useCallback(
    (params) => () => {
      params.status = 2; 
      dispatch(updateStatusOrder(params));
    },
    []
  );


  return (
    <>
      <HeaderWrap>
        <HeaderContent>
          <h3>Order List</h3>
        </HeaderContent>
      </HeaderWrap>

      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={orderList}
          columns={columns}
          pageSize={10}
          getRowId={(rows) => rows._id}
          rowsPerPageOptions={[10]}
        />
      </div>
    </>
  );
};

export default OrderList;
