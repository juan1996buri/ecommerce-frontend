import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export default function SecondaryDropDownMany({
  setToggleSecondaryDropDown,
  toggleSecondaryDropDown,
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Menu
        sx={{
          marginTop: "2rem",
          marginLeft: "-3rem",
        }}
        open={toggleSecondaryDropDown}
        onClose={() =>
          setToggleSecondaryDropDown((isActive: boolean) => !isActive)
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem
          onClick={() =>
            setToggleSecondaryDropDown((isActive: boolean) => !isActive)
          }>
          Profile
        </MenuItem>
        <MenuItem
          onClick={() =>
            setToggleSecondaryDropDown((isActive: boolean) => !isActive)
          }>
          My account
        </MenuItem>
        <MenuItem
          onClick={() =>
            setToggleSecondaryDropDown((isActive: boolean) => !isActive)
          }>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
