import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import theme, { colors } from "../../../theme/theme";

interface Props {
  text?: string;
  subText?: string;
}

const ImgSignUp = ({ text, subText }: Props) => {
  return (
    <Grid
      item
      lg={6}
      sx={{
        padding: " 0 0 4rem",
        [theme.breakpoints.up("lg")]: {
          padding: "4rem",
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
        },
        position: "relative",
      }}
    >
      <Card sx={{ position: "relative", minHeight: "459px" }}>
        <CardMedia
          image="images/bg-SignUp.png"
          sx={{
            position: "absolute",
            borderRadius: "10px",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />

        <CardMedia
          image="images/sona-token.png"
          sx={{
            position: "relative",
            height: "306px",
            width: "306px",
            margin: "0 auto",
          }}
        />
        <CardContent
          sx={{
            position: "relative",
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "0.5rem" }}>
            {text}
          </Typography>
          <Typography variant="body2" sx={{ color: colors.lightWhite2 }}>
            {subText}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ImgSignUp;
