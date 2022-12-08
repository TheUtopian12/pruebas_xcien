import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { Hidden } from "@mui/material";
import Nav from "../components/ui/Navbar/Nav";
import NavResponsive from "./ui/Navbar/NavResponsive";
import Brightness5TwoToneIcon from '@mui/icons-material/Brightness5TwoTone';
import ModeNightTwoToneIcon from '@mui/icons-material/ModeNightTwoTone';
import {Button} from "@mui/material";
const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button
        color='inherit'
          onClick={() => setTheme("light")}
        >
          <Brightness5TwoToneIcon color="warning"/>
        </Button>
      );
    } else {
      return (
        <Button
          color='inherit'
          onClick={() => setTheme("dark")}
        >
          <ModeNightTwoToneIcon color="info"/>
        </Button>
      );
    }
  };
  return (
    <>
      <Hidden mdDown>
        <Nav renderThemeChanger={renderThemeChanger} />
      </Hidden>
      <Hidden mdUp>
        <NavResponsive renderThemeChanger={renderThemeChanger}/>
      </Hidden>
    </>
  );
};

export default NavBar;
