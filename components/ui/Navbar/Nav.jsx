import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Hidden } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useTheme } from "next-themes";
import Link from "next/link";
const Navbar = ({renderThemeChanger}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1e2029" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          XCIEN
        </Typography>
        {renderThemeChanger()}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{ color: "#fff" }}><Link href='/'>Inicio</Link> </Button>
          <Button
            color="inherit"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Servicios
          </Button>

          <Button sx={{ color: "#fff" }}><Link href='/#'>Nosotros</Link> </Button>
          <Button sx={{ color: "#fff" }}><Link href='/#'>Contacto</Link> </Button>
        </Box>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}><Link href='/Internet'>Internet</Link> </MenuItem>
          <MenuItem onClick={handleClose}>SDWAN</MenuItem>
          <MenuItem onClick={handleClose}>Telefonia IP</MenuItem>
          <MenuItem onClick={handleClose}>Seguridad Administrada</MenuItem>
          <MenuItem onClick={handleClose}>VPN</MenuItem>
          <MenuItem onClick={handleClose}>Data Center</MenuItem>
          <MenuItem onClick={handleClose}>Strong Internet</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
