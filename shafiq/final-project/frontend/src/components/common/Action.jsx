import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const ActionContent = styled.div`
  padding-top: 3px;
`;

const Action = ({ settings, handelClickEvent }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ActionContent>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={() => handelClickEvent(setting)}>
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </ActionContent>
  );
};

export default Action;
