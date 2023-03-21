import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/material.css";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { colors } from "../../../../../theme/theme";
import { IUser } from "../../../../../types/IUserByAuthId";
import CloseIcon from "@mui/icons-material/Close";
import * as yup from "yup";
import { useFormik } from "formik";
import FormikTextInput from "../../../ui/FormikTextInput/FormikTextInput";
import { useStyles } from "../ChangeUserData/styles";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_ADDRESS } from "../../../../../GraphQLOperation/private/mutation";
import { LoadingButton } from "@mui/lab";

const validationSchema = yup.object({
  street: yup.string().max(500).required("Street is required"),
  apartment: yup.string().max(500),
  city: yup.string().max(255).required("City is required"),
  zipCode: yup.string().max(255).required("Zip code is required"),
  state: yup.string().max(255).required("State is required"),
  country: yup.string().max(255).required("Country is required"),
});

function AddressFrom({ userData }: { userData: IUser | undefined }) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      street: userData?.address?.street || "",
      apartment: userData?.address?.apartment || "",
      city: userData?.address?.city || "",
      zipCode: userData?.address?.zipCode || "",
      state: userData?.address?.state || "",
      country: userData?.address?.country || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateUserAddress({
        variables: {
          ...values,
        },
      });
    },
  });

  const [updateUserAddress, { loading, data, error }] =
    useMutation(UPDATE_USER_ADDRESS);

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
              <Alert severity="error">Error while updating address.</Alert>
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
                  <FormikTextInput id="street" label="Street" formik={formik} />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="apartment"
                    label="Apartament"
                    formik={formik}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput id="city" label="City" formik={formik} />
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="zipCode"
                    label="Zip Code"
                    formik={formik}
                  />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput id="state" label="State" formik={formik} />
                </Stack>

                <Stack
                  sx={{ width: "100%", maxWidth: "350px", marginY: "2rem" }}
                >
                  <FormikTextInput
                    id="country"
                    label="Country"
                    formik={formik}
                  />
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
              Update Address
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
                    Street:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.address?.street || "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Apartment:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.address?.apartment || "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    City:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.address?.city || "n/a"}
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
                    Zip Code:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.address?.zipCode || "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    State:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.address?.state || "n/a"}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  mb={"0.625rem"}
                  alignItems={"flex-end"}
                >
                  <Typography variant="body1" color={colors.grey}>
                    Country:
                  </Typography>
                  <Typography variant="h4" lineHeight={1.5}>
                    {userData?.address?.country || "n/a"}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default AddressFrom;
