import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import { colors } from "../../../../../theme/theme";
import { getUserAvatar } from "../../../../../utilities/mockupData/getUserByAuthId";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_AVATAR } from "../../../../../GraphQLOperation/private/mutation";

interface Props {
  avatar: string | undefined;
}

const AvatarForm = ({ avatar }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [currentAvatar, setCurrentAvatar] = useState<string | undefined>(
    avatar
  );
  const [bytes, setBytes] = useState<any>(null);
  const [fileType, setFileType] = useState<any>(null);

  const handleOnClickAvatar = () => {
    inputRef.current?.click();
  };

  const [getPresignedUrl, { data, loading, error }] = useMutation(
    UPDATE_USER_AVATAR,
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
      uploadBinary(data.updateUserAvatar?.uploadUrl);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  // important to set current avatar when avatar changes
  useEffect(() => {
    if (avatar) {
      setCurrentAvatar(avatar);
    }
  }, [avatar]);

  const uploadBinary = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: bytes,
        headers: {
          "Content-Type": fileType,
        },
      });

      // SET AVATAR LOCALLY
      const b64 = Buffer.from(bytes).toString("base64");
      const baseURL = `data:${fileType};base64,${b64}`;
      setCurrentAvatar(baseURL);
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
          left: "10rem",
          top: "-2.8rem",
          zIndex: 1,
        }}
        onClick={handleOnClickAvatar}
      >
        <PhotoCameraIcon />
      </IconButton>

      <Avatar
        sx={{
          width: "5.625rem",
          height: "5.625rem",
          position: "absolute",
          marginTop: "-3.2rem",
          marginLeft: "6rem",
          backgroundColor: colors.lightDark,
          border: `2px solid ${colors.white}`,
        }}
        src={getUserAvatar(currentAvatar)}
      ></Avatar>
    </Box>
  );
};

export default AvatarForm;
