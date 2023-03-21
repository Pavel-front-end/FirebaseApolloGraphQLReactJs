import React, { FC, useEffect, useState } from "react";
import "react-phone-input-2/lib/material.css";
import {
  Alert,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { colors } from "../../../../../theme/theme";
import { IUser } from "../../../../../types/IUserByAuthId";
import { sliceAddress } from "../../../../../utilities";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import { useFormik } from "formik";
import FormikTextInput from "../../../ui/FormikTextInput/FormikTextInput";
import PhoneInput from "react-phone-input-2";
import { useStyles } from "../ChangeUserData/styles";
import Switch from "@mui/material/Switch";
import { MuiChipsInput } from "mui-chips-input";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_PROFILE_NO_ADDRESS } from "../../../../../GraphQLOperation/private/mutation";
import { LoadingButton } from "@mui/lab";

const validationSchema = yup.object({
  firstName: yup.string().max(255),
  lastName: yup.string().max(255),
  displayName: yup.string().max(255),
  profession: yup.string().max(255),
  biography: yup.string().max(5000),
  phoneNumber: yup.string().max(255),
  dateOfBirth: yup.string().max(255),
  gender: yup.string().max(255),
  tags: yup.array().of(yup.string()),
  isSubscribed: yup.boolean(),
});

interface Props {
  userData: IUser | undefined;
}

const PersonalInfoForm: FC<Props> = ({ userData }) => {
  const { classes } = useStyles();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      displayName: userData?.displayName || "",
      profession: userData?.profession || "",
      biography: userData?.biography || "",
      phoneNumber: userData?.phoneNumber || "",
      dateOfBirth: userData?.dateOfBirth || "",
      gender: userData?.gender || "",
      tags: userData?.tags || [],
      isSubscribed: userData?.isSubscribed || false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateUser({
        variables: {
          ...values,
          dateOfBirth: null, // TEMPORARY UNTIL WE HAVE UI FOR DATE PICKER
        },
      });
    },
  });

  const [updateUser, { loading, data, error }] = useMutation(
    UPDATE_USER_PROFILE_NO_ADDRESS
  );

  const matches = useMediaQuery("(max-width: 650px)");

  const [isEditMode, setIsEditMode] = useState(false);
  const [updateError, setUpdateError] = useState(false);

  const toggleEdit = () => {
    setIsEditMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (data) {
      toggleEdit();
    }

    if (error) {
      setUpdateError(true); // show snackbar
    }
  }, [data, error]);

  if (isEditMode) {
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Box position={"relative"}>
            <Snackbar
              open={updateError}
              autoHideDuration={6000}
              onClose={() => setUpdateError(false)}
            >
              <Alert severity="error">Error while updating profile.</Alert>
            </Snackbar>

            <Box
              sx={{
                position: "absolute",
                right: "0",
                zIndex: 1,
              }}
            >
              <IconButton onClick={toggleEdit}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Grid
              container
              position={"relative"}
              direction={"row"}
              justifyItems={"between"}
              alignItems={"flex-start"}
            >
              <Grid item xs={12} md={6}>
                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="firstName"
                    label="First Name"
                    formik={formik}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="lastName"
                    label="Last Name"
                    formik={formik}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="displayName"
                    label="Display Name"
                    formik={formik}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="profession"
                    label="Profession"
                    formik={formik}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="biography"
                    label="biography"
                    formik={formik}
                    multiline
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <PhoneInput
                    inputStyle={{
                      background: "none",
                      color: colors.white,
                      border: `2px solid ${colors.white}`,
                      borderRadius: "0.625rem",
                      maxWidth: "350px",
                      width: "100%",
                    }}
                    containerStyle={{
                      fontFamily: '"Roboto","Helvetica","Arial,sans-serif"',
                      fontSize: "1rem",
                    }}
                    dropdownStyle={{ color: colors.dark }}
                    containerClass={classes.containerInput}
                    country={"eu"}
                    value={formik.values.phoneNumber}
                    onChange={(phone) =>
                      formik.setFieldValue("phoneNumber", phone)
                    }
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="dateOfBirth"
                    label="Date Of Birth"
                    formik={formik}
                    disabled={true}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  {/* FORM CONTROL NEEDED FOR THE LABEL TO APPEAR CORRECTLY ON THE SELECT */}
                  <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">
                      Gender
                    </InputLabel>

                    <Select
                      id="gender"
                      name="gender"
                      label="Gender"
                      labelId="demo-simple-select-helper-label"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                      <MenuItem value={"gender fluid"}>Gender Fluid</MenuItem>
                      <MenuItem value={"prefer not to say"}>
                        Prefer Not To Say
                      </MenuItem>
                      <MenuItem value={"other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <MuiChipsInput
                    id="tags"
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    value={formik.values.tags}
                    onChange={(value) => {
                      formik.setFieldValue("tags", value);
                    }}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <Box alignItems={"center"}>
                    <Typography variant="body1" color={colors.grey}>
                      Subscribed to newsletter
                    </Typography>

                    <Switch
                      id="isSubscribed"
                      name="isSubscribed"
                      checked={formik.values.isSubscribed}
                      onChange={formik.handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            <LoadingButton
              sx={{
                marginY: "2rem",
              }}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              loading={loading}
            >
              Update Profile
            </LoadingButton>
          </Box>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Box position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              right: "0",
              zIndex: 1,
            }}
          >
            <IconButton onClick={toggleEdit}>
              <EditIcon />
            </IconButton>
          </Box>

          <Grid
            container
            position={"relative"}
            direction={"row"}
            justifyItems="between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    First name:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.firstName || "n/a"}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Last name:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.lastName || "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Display name:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.displayName || "n/a"}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Profession:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.profession || "n/a"}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Biography:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {matches
                      ? sliceAddress(userData?.biography) || "n/a"
                      : userData?.biography || "n/a"}
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Phone number:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.phoneNumber
                      ? `+${userData?.phoneNumber}`
                      : "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Date of birth:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.dateOfBirth ? `${userData?.dateOfBirth}` : "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Gender:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.gender ? `${userData?.gender}` : "n/a"}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Subscribed:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.isSubscribed ? "yes" : "no"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Tags:
                  </Typography>

                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.tags?.join(",") || "n/a"}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
};

export default PersonalInfoForm;
