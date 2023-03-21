import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { getUserWallpaper } from "../../../utilities/mockupData/getUserByAuthId";

interface Props {
  wallpaper: string | undefined
}

const UserWallpaper = ({wallpaper} : Props) => {

  return (
    <Box>
      <CardMedia
        image={getUserWallpaper(wallpaper)}
        sx={{
          height: {
            xs: "calc((100vw) / 2)",
            md: "calc((100vw - 2rem) / 3)",
            lg: "calc(1340px / 5.36)",
          },
          maxHeight: '16rem',
          width: {md: "100%"},
          maxWidth: "1340px",
          margin: {
            xs: "0.25rem -1rem 0",
            md: "0.25rem 0 0",
            },
        }}
      ></CardMedia>
    </Box>
  );
};

export default UserWallpaper;
