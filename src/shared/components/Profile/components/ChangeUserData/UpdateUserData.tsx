import { Button, CircularProgress, Stack } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { IUser } from "../../../../../types/IUserByAuthId";
import InputText from "../../../ui/InputText";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useStyles } from "./styles";
import { colors } from "../../../../../theme/theme";
import UpdateAvatar from "./UpdateAvatar";
import UpdateAddress from "./UpdateAddress";
import { reducerAddress, reducerError } from "./reducer";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_PROFILE } from "../../../../../GraphQLOperation/private/mutation";
import { USER_BY_ID_FULL } from "../../../../../GraphQLOperation/private/queries";
import { useAuth } from "../../../../../context/AuthContext";

interface Props {
  userData: IUser | undefined;
}

const UpdateUserData = ({ userData }: Props) => {
  const { user } = useAuth();
  const uid = user.uid;
  const { classes } = useStyles();
  const [firstName, setFirstName] = useState(userData?.firstName || "");
  const [isErrorName, setErrorName] = useState(false);

  const [lastName, setLastName] = useState(userData?.lastName || "");
  const [isErrorLastName, setErrorLastName] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber || "");
  const [newUrlAvatar, setNewUrlAvatar] = useState("");

  const [updateUser, { loading }] = useMutation(UPDATE_USER_PROFILE, {
    refetchQueries: [{ query: USER_BY_ID_FULL, variables: { id: uid } }],
  });

  const [address, setAddress] = useReducer(reducerAddress, {
    street: userData?.address?.street || "",
    apartment: userData?.address?.apartment || "",
    city: userData?.address?.city || "",
    zipCode: userData?.address?.zipCode || "",
    state: userData?.address?.state || "",
    country: userData?.address?.country || "",
  });
  const [isErrorAddress, setErrorAddress] = useReducer(reducerError, {
    street: false,
    apartment: false,
    city: false,
    zipCode: false,
    state: false,
    country: false,
  });

  const [isDisabled, setDisabled] = useState(false);

  const handleUpdateAddress = (type: string, payload: string) =>
    setAddress({ type, payload });

  const handleErrorAddress = (type: string, payload: boolean) =>
    setErrorAddress({ type, payload });

  const handleUpdateUser = async () => {
    const updateData: { [k: string]: any } = {
      city: address.city,
      zipCode: address.zipCode,
      state: address.state,
      country: address.country,
      street: address.street,
    };
    if (userData?.firstName !== firstName) updateData.firstName = firstName;
    if (userData?.lastName !== lastName) updateData.lastName = lastName;
    if (userData?.phoneNumber !== phoneNumber)
      updateData.phoneNumber = phoneNumber;
    if (userData?.address?.apartment !== address.apartment)
      updateData.apartment = address.apartment;
    updateUser({
      variables: updateData,
    });
  };

  useEffect(() => {
    if (
      isErrorName ||
      isErrorLastName ||
      isErrorAddress.apartment ||
      isErrorAddress.city ||
      isErrorAddress.country ||
      isErrorAddress.state ||
      isErrorAddress.street ||
      isErrorAddress.zipCode ||
      loading
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    isErrorName,
    isErrorLastName,
    isErrorAddress.apartment,
    isErrorAddress.city,
    isErrorAddress.country,
    isErrorAddress.state,
    isErrorAddress.street,
    isErrorAddress.zipCode,
    phoneNumber,
    newUrlAvatar,
    loading,
  ]);

  return (
    <Stack>
      <Stack alignItems={"flex-start"}>
        <UpdateAvatar
          avatar={userData?.avatar}
          setNewUrlAvatar={setNewUrlAvatar}
        />
      </Stack>
      <Stack sx={{ width: "100%", maxWidth: "350px", marginY: "1rem" }}>
        <InputText
          isErrorText={isErrorName}
          setText={setFirstName}
          setErrorText={setErrorName}
          errorText={"invalid name"}
          labelText={"First Name"}
          text={firstName}
        />
      </Stack>
      <Stack sx={{ width: "100%", maxWidth: "350px", marginY: "1rem" }}>
        <InputText
          isErrorText={isErrorLastName}
          setText={setLastName}
          setErrorText={setErrorLastName}
          errorText={"invalid last name"}
          labelText={"Last Name"}
          text={lastName}
        />
      </Stack>
      <Stack sx={{ width: "100%", maxWidth: "350px", marginY: "1rem" }}>
        <PhoneInput
          inputStyle={{
            background: "none",
            color: colors.white,
            border: `2px solid ${colors.white}`,
            borderRadius: "0.625rem",
            width: "350px",
          }}
          containerStyle={{
            fontFamily: '"Roboto","Helvetica","Arial,sans-serif"',
            fontSize: "1rem",
          }}
          dropdownStyle={{ color: colors.dark }}
          containerClass={classes.containerInput}
          country={"eu"}
          value={phoneNumber}
          onChange={(phone) => setPhoneNumber(phone)}
        />
      </Stack>
      <UpdateAddress
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        isErrorAddress={isErrorAddress}
        address={address}
      />
      <Stack sx={{ width: "100%", maxWidth: "170px", marginY: "1rem" }}>
        <Button
          variant="contained"
          disabled={isDisabled}
          onClick={handleUpdateUser}
        >
          {loading ? <CircularProgress color="inherit" size={24} /> : "Update"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default UpdateUserData;
