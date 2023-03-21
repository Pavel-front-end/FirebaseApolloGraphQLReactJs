import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import WelcomeLogIn from "../../shared/components/WelcomeLogIn";
import ImgSignUp from "../../shared/features/ImgSignUp";

const WelcomeSona = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // redirect user to home if he is logged in.
  // in case user uses a direct link to this page from the browser href.
  useEffect(() => {
    if (!!user) {
      navigate("/", { replace: true });
    }
  }, [window.location.pathname]);

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction={{ xs: "column-reverse", lg: "row" }}
      >
        <WelcomeLogIn />
        <ImgSignUp
          text="Enjoy the world’s Sona Game"
          subText="Manage your achievements in your personal account"
        />
      </Grid>
    </Container>
  );
};

export default WelcomeSona;
