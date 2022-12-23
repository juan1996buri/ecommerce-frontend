import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { stateMenu } from "../../features/slice/menuSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SecondaryDropDowMenu from "./SecondaryDropDowMenu";
import { stateCart } from "../../features/slice/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const isActiveMenu = useSelector((state: RootState) => state.menu.isActive);
  const isActiveCart = useSelector((state: RootState) => state.cart.isActive);
  const dispatch = useDispatch();
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);
  const navigation = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: "10",
      }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              dispatch(dispatch(stateMenu(Boolean(!isActiveMenu))));
            }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigation("/")}>
            Expres
          </Typography>
          <Box
            onClick={() => setToggleSecondaryDropDown((isActive) => !isActive)}
            sx={{
              display: "flex",
              justifyItems: "center",
              gap: "0.02rem",
              cursor: "pointer",
            }}>
            <Typography>More</Typography>
            {toggleSecondaryDropDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>

          <Box
            onClick={() => {
              dispatch(stateCart(!isActiveCart));
            }}
            sx={{
              display: "flex",
              justifyItems: "center",
              gap: "0.02rem",
              cursor: "pointer",
              paddingLeft: "1rem",
            }}>
            <ShoppingCartIcon />
            <Typography>Cart</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <SecondaryDropDowMenu
        setToggleSecondaryDropDown={setToggleSecondaryDropDown}
        toggleSecondaryDropDown={toggleSecondaryDropDown}
      />
    </Box>
  );
}
