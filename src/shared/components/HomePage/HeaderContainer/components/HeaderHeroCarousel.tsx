import { Box, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "../../../../../theme/theme";
import { getUserListHeroes } from "../../../../../utilities/mockupData/getHeroes";

const HeaderHeroCarousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
  };
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          width: { xs: "calc(100% + 1rem)", md: "49.5vw" },
          position: "relative",
          top: { md: "-100px" },
          "& .slick-prev": {
            left: "auto",
            right: "114px",
            bottom: "30px",
            top: "auto",
            width: "50px",
            height: "50px",
            zIndex: 1,
            "&:before": {
              fontSize: "50px",
            },
          },
          "& .slick-next": {
            right: "32px",
            bottom: "30px",
            top: "auto",
            width: "50px",
            height: "50px",
            zIndex: 1,
            "&:before": {
              fontSize: "50px",
            },
          },
          "& .slick-dots": {
            bottom: "75px",
            paddingLeft: "40px",
            textAlign: { xs: "left" },
            "& li button:before": {
              color: colors.white,
              fontSize: "0.625rem",
            },
            "& li.slick-active button:before": {
              color: colors.white,
            },
          },
        }}
      >
        <Slider {...settings}>
          {getUserListHeroes(undefined)?.listHeroes.map((hero) => (
            <Box key={hero.id} sx={{}}>
              <CardMedia
                image={hero.wallpaper}
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: "530px", md: "800px" },
                  borderBottomLeftRadius: "0.625rem",
                  borderTopLeftRadius: { xs: "0.625rem", md: "0" },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  bottom: { xs: "200px", md: "280px" },
                  transform: "rotate(-90deg)",
                }}
              >
                <Typography variant="h2" mb={"0.5rem"}>
                  {hero.title}
                </Typography>
                <Typography variant="h4" color={colors.lightWhite2}>
                  {hero.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Grid>
  );
};

export default HeaderHeroCarousel;
