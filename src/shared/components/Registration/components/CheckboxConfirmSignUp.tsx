import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { colors } from "../../../../theme/theme";

interface Props {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const CheckboxConfirmSignUp = ({ checked, setChecked }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <FormGroup sx={{ marginTop: "1rem" }}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label={
          <>
            <Typography variant="body2" component={"span"}>
              I have read and agree to Sona{""}
            </Typography>
            <Button
              variant="text"
              component={NavLink}
              to="/term-service"
              sx={{
                color: colors.purple,
                fontSize: "0.875rem",
                padding: "0 0.25rem",
                ":hover": {
                  color: colors.purple,
                },
              }}
            >
              Terms of Service
            </Button>
            <Typography variant="body2" component={"span"}>
              and
            </Typography>
            <Button
              variant="text"
              component={NavLink}
              to="/privacy-policy"
              sx={{
                color: colors.purple,
                fontSize: "0.875rem",
                padding: "0 0.25rem",
                ":hover": {
                  color: colors.purple,
                },
              }}
            >
              Private Policy
            </Button>
          </>
        }
      />
    </FormGroup>
  );
};

export default CheckboxConfirmSignUp;
