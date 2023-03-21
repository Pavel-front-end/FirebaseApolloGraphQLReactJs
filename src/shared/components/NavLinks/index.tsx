import { NavLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

interface Props {
  user: any;
  fontSize?: boolean;
}

function NavLinks({ user, fontSize }: Props) {
  const { classes } = useStyles();
  const { t } = useTranslation();
  return (
    <nav className={classes.nav}>
      <Button
        component={NavLink}
        to="/"
        className={fontSize ? classes.p20 : classes.link}
      >
        {t("home")}
      </Button>
      <Typography variant="body2" className={classes.separator}>
        /
      </Typography>
      <Button
        component={NavLink}
        to="/marketplace"
        className={fontSize ? classes.p20 : classes.link}
      >
        Marketplace
      </Button>
      {user && (
        <>
          <Typography variant="body2" className={classes.separator}>
            /
          </Typography>
          <Button
            component={NavLink}
            to="/dashboard"
            className={fontSize ? classes.p20 : classes.link}
          >
            {t("dashboard")}
          </Button>
          <Typography variant="body2" className={classes.separator}>
            /
          </Typography>
          <Button
            component={NavLink}
            to="/inventory"
            className={fontSize ? classes.p20 : classes.link}
          >
            {t("inventory")}
          </Button>
        </>
      )}
    </nav>
  );
}

export default NavLinks;
