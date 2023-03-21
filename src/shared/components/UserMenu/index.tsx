import { Avatar, Box, IconButton, useMediaQuery } from "@mui/material";
import { HamburgerMenu } from "../ui/icons/HamburgerMenu";
import { colors } from "../../../theme/theme";
import DeskMenu from "./components/DeskMenu";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

export default function UserMenu() {
  const matches = useMediaQuery("(min-width:1200px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ marginLeft: "1.875rem" }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: 50, height: 50, background: colors.white }}>
          <HamburgerMenu />
        </Avatar>
      </IconButton>
      {matches ? <DeskMenu open={open} anchorEl={anchorEl} handleClose={handleClose} /> : <MobileMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />}
    </Box>
  );
}
