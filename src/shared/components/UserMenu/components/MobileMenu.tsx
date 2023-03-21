import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider } from "@mui/material";
import { colors } from "../../../../theme/theme";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SignInBtn from "../../SignInBtn";
import { useAuth } from "../../../../context/AuthContext";

interface Props {
  handleClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
}

const MobileMenu = ({ handleClose, open, anchorEl }: Props) => {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <Menu
      id="MobileMenu"
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
      <Divider sx={{ background: colors.lightGrey }} />
      <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          to="/"
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark } }}
        >
          {t("home")}
        </Button>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          to="/marketplace"
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark } }}
        >
          Marketplace
        </Button>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          to="/dashboard"
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark } }}
        >
          {t("dashboard")}
        </Button>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Button
          component={NavLink}
          to="/inventory"
          sx={{ color: colors.dark, width: '100%', justifyContent: 'flex-start', ":hover": { color: colors.dark } }}
        >
          {t("inventory")}
        </Button>
      </MenuItem>
      <Divider sx={{ background: colors.lightGrey }} />
      <MenuItem onClick={handleClose}>
        <SignInBtn mobile={true} />
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
