import { TextField } from "@mui/material";

interface Props {
  isErrorNumber: boolean;
  setNumber: (type: string, payload: string) => void;
  setErrorNumber: (type: string, payload: boolean) => void;
  errorText: string;
  labelText: string;
  number: string | undefined;
  label: string;
  validationValue?: string;
  minPrice?: string | undefined;
}

const InputNumber = ({
  isErrorNumber,
  setNumber,
  setErrorNumber,
  errorText,
  labelText,
  number,
  label,
  validationValue,
  minPrice
}: Props) => {
  const isValidText = (valueInput: string) => {
    if (
      valueInput.length > 0 &&
      valueInput.length < 12 &&
      (validationValue ? Number(valueInput) <= Number(validationValue) : true) &&
      (minPrice ? +valueInput > +minPrice : true)
    ) {
      setErrorNumber(label, false);
    } else {
      setErrorNumber(label, true);
    }
  };
  return (
    <TextField
      error={isErrorNumber}
      type="text"
      variant="outlined"
      inputProps={{ "data-testid": label }}
      label={labelText}
      value={number}
      onChange={(e) =>
        (/^[1-9]\d*$/.test(e.target.value) || e.target.value === "") &&
        setNumber(label, e.target.value)
      }
      onBlur={(e) => isValidText(e.target.value)}
      helperText={isErrorNumber ? errorText : ""}
    />
  );
};

export default InputNumber;
