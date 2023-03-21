import { Divider } from "@mui/material";
import { FC } from "react";
import { IUser } from "../../../../../types/IUserByAuthId";
import UpdateUserData from "./UpdateUserData";
import UpdateEmail from "./UpdateEmail";
import UpdateUsername from "./UpdateUsername";

interface Props {
  userData: IUser | undefined;
}

const ChangeUserData: FC<Props> = ({ userData }) => {
  return (
    <>
      <UpdateUserData userData={userData} />
      <Divider sx={{ margin: "1.5rem 0" }} />
      <UpdateUsername username={userData?.username} />
      {/* <Divider sx={{ margin: "1.5rem 0" }} />
        <UpdateEmail email={userData?.email} /> */}
      <Divider sx={{ margin: "1.5rem 0" }} />
    </>
  );
};

export default ChangeUserData;
