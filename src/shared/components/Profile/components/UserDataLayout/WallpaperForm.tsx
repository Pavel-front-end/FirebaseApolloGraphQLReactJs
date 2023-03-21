import { useMutation } from "@apollo/client";
import { Box, IconButton } from "@mui/material";
import { CardMedia } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { UPDATE_USER_COVER_IMAGE } from "../../../../../GraphQLOperation/private/mutation";
import { getUserWallpaper } from "../../../../../utilities/mockupData/getUserByAuthId";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

interface Props {
  wallpaper: string | undefined;
}

const WallpaperForm = ({ wallpaper }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [currentWallpaper, setCurrentWallpaper] = useState<string | undefined>(
    wallpaper
  );
  const [bytes, setBytes] = useState<any>(null);
  const [fileType, setFileType] = useState<any>(null);

  const handleOnClickAvatar = () => {
    inputRef.current?.click();
  };

  const [getPresignedUrl, { data, loading, error }] = useMutation(
    UPDATE_USER_COVER_IMAGE,
    {
      fetchPolicy: "no-cache",
    }
  );

  // upload image from pc
  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      let imgObj = e.target.files[0];

      // initiate reader and convert blob to base64.
      let reader = new FileReader();
      reader.readAsArrayBuffer(imgObj);

      reader.onload = () => {
        let arrayBuffer = reader.result as ArrayBuffer;

        let bytes = new Uint8Array(arrayBuffer);
        setBytes(bytes);
        setFileType(imgObj.type);

        let extension = imgObj.type.split("/")[1];

        getPresignedUrl({
          variables: {
            fileExtension: extension,
          },
        });
      };
    }
  };

  useEffect(() => {
    if (data) {
      uploadBinary(data.updateUserCoverImage?.uploadUrl);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  // important to set current avatar when avatar changes
  useEffect(() => {
    if (wallpaper) {
      setCurrentWallpaper(wallpaper);
    }
  }, [wallpaper]);

  const uploadBinary = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: bytes,
        headers: {
          "Content-Type": fileType,
        },
      });

      // SET WALLPAPER LOCALLY
      const b64 = Buffer.from(bytes).toString("base64");
      const baseURL = `data:${fileType};base64,${b64}`;
      setCurrentWallpaper(baseURL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box position={"relative"}>
      <input
        ref={inputRef}
        hidden
        accept="image/*"
        type="file"
        onChange={handleCustomImageUpload}
      />

      <IconButton
        sx={{
          position: "absolute",
          right: 10,
          top: 20,
          zIndex: 1,
        }}
        onClick={handleOnClickAvatar}
      >
        <PhotoCameraIcon />
      </IconButton>

      <CardMedia
        image={getUserWallpaper(currentWallpaper)}
        sx={{
          height: {
            xs: "calc((100vw) / 2)",
            md: "calc((100vw - 2rem) / 3)",
            lg: "calc(1340px / 5.36)",
          },
          maxHeight: "16rem",
          width: { md: "100%" },
          maxWidth: "1340px",
          margin: {
            xs: "0.25rem -2rem 0",
            md: "0.25rem 0 0",
          },
        }}
      ></CardMedia>
    </Box>
  );
};

export default WallpaperForm;
