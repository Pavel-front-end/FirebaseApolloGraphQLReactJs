import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { colors } from "../../../theme/theme";

interface Props {
  mobile?: boolean;
}

const SignInBtn = ({ mobile }: Props) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // custom function that set this current page href in the
  // session storage, so we can redirect the user back to this page
  // after successful login/sign up
  const handleNavigateToWelcomeSona = () => {
    window?.sessionStorage?.setItem("prevPage", location.pathname);

    // navigate to welcome-sona page
    navigate("/welcome-sona");
  };

  return (
    <>
      {user ? (
        <Button
          startIcon={<LockIcon />}
          onClick={() => logout()}
          sx={{
            fontSize: "0.875rem",
            color: mobile ? colors.dark : colors.white,
            ":hover": {
              color: mobile ? colors.dark : colors.white,
            },
            width: mobile ? "100%" : "auto",
            justifyContent: "flex-start",
          }}
        >
          Sign out
        </Button>
      ) : (
        <Button
          startIcon={<LockIcon />}
          onClick={handleNavigateToWelcomeSona}
          sx={{
            fontSize: "0.875rem",
            color: mobile ? colors.dark : colors.white,
            ":hover": {
              color: mobile ? colors.dark : colors.white,
            },
            width: mobile ? "100%" : "auto",
            justifyContent: "flex-start",
          }}
        >
          Sign in
        </Button>
      )}
    </>
  );
};

export default SignInBtn;
