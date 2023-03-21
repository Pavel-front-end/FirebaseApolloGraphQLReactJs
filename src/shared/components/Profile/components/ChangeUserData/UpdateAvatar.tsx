import { PhotoCamera } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { colors } from "../../../../../theme/theme";

interface Props {
    avatar: string | undefined
    setNewUrlAvatar: (url: string) => void
}

const UpdateAvatar = ({avatar, setNewUrlAvatar}: Props) => {
    const [currentAvatar, setCurrentAvatar] = useState(avatar);
    const handleChangeAvatar = async (
        newFile: React.ChangeEvent<HTMLInputElement>
      ) => {
        const file = newFile?.target?.files?.[0];
        if (file) {
            setCurrentAvatar(window.URL.createObjectURL(file));
        }
      };
  return (
    <IconButton
    aria-label="upload picture"
    component="label"
    sx={{ margin: "1.5rem 0" }}
  >
    <input
      hidden
      accept="image/*"
      type="file"
      onChange={handleChangeAvatar}
    />
    <Avatar
      sx={{
        width: "5.625rem",
        height: "5.625rem",
        color: colors.lightWhite2,
      }}
      src={currentAvatar}
    >
      <PhotoCamera />
    </Avatar>
  </IconButton>
  )
}

export default UpdateAvatar
