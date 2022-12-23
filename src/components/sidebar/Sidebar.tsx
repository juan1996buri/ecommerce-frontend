import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { stateMenu } from "../../features/slice/menuSlice";
import { useGetCategoriesQuery } from "../../features/api/category/categoryApi";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

interface Category {
  id: number;
  name: string;
}

export default function Sidebar() {
  const isActiveMenu = useSelector((state: RootState) => state.menu.isActive);
  const dispatch = useDispatch();

  const {
    data: categoriesList,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery("");

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      dispatch(stateMenu(Boolean(!isActiveMenu)));
    };

  const list = (anchor: "left") => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Box sx={{ paddingTop: "1rem", paddingLeft: "1rem" }}>
        <Typography>CATEGORIAS</Typography>
        <List>
          {categoriesList?.categories.map(
            (category: Category, index: number) => (
              <ListItem key={index} disablePadding>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={category.name}
                />
              </ListItem>
            )
          )}
        </List>
      </Box>

      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={isActiveMenu}
        onClose={() => {
          dispatch(stateMenu(Boolean(!isActiveMenu)));
        }}>
        {list("left")}
      </Drawer>
    </div>
  );
}
