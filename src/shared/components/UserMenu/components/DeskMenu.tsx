import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { colors } from "../../../../theme/theme";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

interface Props {
  handleClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
}

const DeskMenu = ({ handleClose, open, anchorEl }: Props) => {
  const { user } = useAuth();
  return (
    <Menu
      id="DeskMenu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark }, '&.Mui-disabled': {color: colors.grey} }}
          to="/account"
          disabled={!user}
        >
          Profile
        </Button>
      </MenuItem>
      {/* <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark }, '&.Mui-disabled': {color: colors.grey} }}
          to="/view-wallet-ether"
          disabled={!user}
        >
          My wallet
        </Button>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark } }}
          to="/genesis-sona-nft"
        >
          Genesis Sona Nft
        </Button>
      </MenuItem> */}
    </Menu>
  );
};

export default DeskMenu;
