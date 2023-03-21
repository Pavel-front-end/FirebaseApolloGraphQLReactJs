import React, { FC } from "react";
import { TextField } from "@mui/material";

interface Props {
  id: string;
  formik: any;
  label: string;
  [x: string]: any;
}

const FormikTextInput: FC<Props> = ({ id, formik, label, ...restOfProps }) => {
  return (
    <TextField
      fullWidth
      id={id}
      name={id}
      label={label}
      value={formik.values[id]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[id] && Boolean(formik.errors[id])}
      helperText={formik.touched[id] && formik.errors[id]}
      {...restOfProps}
    />
  );
};

export default FormikTextInput;
