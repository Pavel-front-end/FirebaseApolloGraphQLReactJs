import { TextField } from "@mui/material";

interface Props {
  isErrorText: boolean;
  handleUpdateAddress: (type: string, payload: string) => void;
  handleErrorAddress: (type: string, payload: boolean) => void;
  errorText: string;
  labelText: string;
  text: string
  validLength: number
}

const InputAddress = ({
  isErrorText,
  handleUpdateAddress,
  handleErrorAddress,
  errorText,
  labelText,
  text,
  validLength
}: Props) => {
  const isValidText = (valueInput: string) => {
    if (valueInput.length > validLength) {
      handleErrorAddress(labelText.toLowerCase(), false);
    } else {
      handleErrorAddress(labelText.toLowerCase(), true);
    }
  };
  return (
    <TextField
      error={isErrorText}
      type="text"
      variant="outlined"
      label={labelText}
      value={text}
      onChange={(e) => handleUpdateAddress(labelText.toLowerCase(), e.target.value)}
      onBlur={(e) => isValidText(e.target.value)}
      helperText={isErrorText ? errorText : ""}
    />
  );
};

export default InputAddress;
