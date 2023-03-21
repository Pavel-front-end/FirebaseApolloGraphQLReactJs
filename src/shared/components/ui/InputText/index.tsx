import { TextField } from "@mui/material";
import { validatorText } from "../../../../utilities";

interface Props {
  isErrorText: boolean;
  setText: (value: string) => void;
  setErrorText: (value: boolean) => void;
  errorText: string;
  labelText: string;
  text: string
}

const InputText = ({
  isErrorText,
  setText,
  setErrorText,
  errorText,
  labelText,
  text
}: Props) => {
  const isValidText = (valueInput: string) => {
    if (validatorText.test(valueInput)) {
      setErrorText(false);
    } else {
      setErrorText(true);
    }
  };
  return (
    <TextField
      error={isErrorText}
      type="text"
      variant="outlined"
      inputProps={{ "data-testid": labelText }}
      label={labelText}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={(e) => isValidText(e.target.value)}
      helperText={isErrorText ? errorText : ""}
    />
  );
};

export default InputText;
