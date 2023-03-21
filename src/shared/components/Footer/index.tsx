import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { colors } from "../../../theme/theme";
import NavLinks from "../NavLinks";
import SocialLink from "../SocialLink";
import Subscribe from "../Subscribe";

export default function Footer() {
  const { user } = useAuth();
  const currentYear = new Date().getFullYear();
  return (
    <Box
      component={"footer"}
      sx={{
        borderTop: `1px solid ${colors.lightWhite}`,
        marginTop: '2rem',
        paddingTop: '1.5rem',
        width: '100%'
      }}
    >
      <Box sx={{
        width: "calc(100% - 2rem)",
        maxWidth: "1280px",
        margin: "0 auto 2rem",
      }}>
        <Grid container spacing={0} direction={{ xs: "column", md: "row" }}>
          <Grid item md={6} marginBottom={{ xs: "2.5rem", md: "0" }}>
            <Typography
              variant="h2"
              marginBottom={"1.5rem"}
              maxWidth={{ xs: "490px", md: "640px" }}
            >
              Join our community of members staying up to date with Sona.
            </Typography>
            <Typography variant="h3" marginBottom={"2.5rem"}>
              sona@sonaprotocol.xyz
            </Typography>
            <Subscribe />
          </Grid>
          <Grid
            item
            container
            md={6}
            alignItems={{ md: "flex-end" }}
            direction={"column"}
            justifyContent={{ md: "flex-end" }}
          >
            <NavLinks user={user} fontSize={true} />
            <SocialLink />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction={{ xs: "column", lg: "row" }}
          sx={{ marginTop: { xs: "2rem", md: "5rem" } }}
        >
          <Grid
            container
            item
            md={6}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              sx={{ fontSize: "0.875rem", color: colors.lightWhite2 }}
              component={NavLink}
              to="/privacy-policy"
            >
              Privacy policy
            </Button>
            <Button
              sx={{ fontSize: "0.875rem", color: colors.lightWhite2 }}
              component={NavLink}
              to="/term-service"
            >
              Term of service
            </Button>
          </Grid>
          <Grid
            container
            item
            md={6}
            justifyContent={{ md: "flex-end" }}
            alignItems={{ md: "flex-end" }}
            sx={{ marginTop: { xs: "1rem", md: "0" } }}
          >
            <Typography variant="body2" sx={{ color: colors.lightWhite2 }}>
              © {currentYear} SonaProtocol
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
