import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";

const AdminLayout = () => {
  return (
    <Dashboard>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Dashboard>
  );
};

export default AdminLayout;
