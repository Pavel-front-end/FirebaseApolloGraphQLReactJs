import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment, InputLabel } from '@mui/material';
import { useRef, useState } from 'react';
import { validatorEmail } from '../../../utilities';
import { SendIcon } from '../ui/icons/Send';

const Subscribe = () => {
  const inputRef = useRef(null)
  const [value, setValue] = useState('')
  const [isError, setError] = useState(false)

  const handleEmail = (valueInput: string) => {
      setValue(valueInput)
      setError(false)
  }
  const isValidEmail = (valueInput: string) => {
    if (validatorEmail.test(valueInput)) {
      setError(false)
    } else {
      setError(true)
    }
  }
  const handleSendMail = () => {
    !isError && console.log(value);
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { maxWidth: '420px', marginTop: '1rem', width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel htmlFor="subscribe">Subscribe and get news</InputLabel>
      <TextField
          error={isError}
          id="subscribe"
          label="Email"
          helperText={isError ? 'Incorrect entry.' : ''}
          ref={inputRef}
          inputProps={{ "data-testid": "subscribe-email" }}
          onChange={(e) => handleEmail(e.target.value)}
          onBlur={(e) => isValidEmail(e.target.value)}
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="send mail"
                  onClick={handleSendMail}
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
          }}
        />
    </Box>
  );
}
export default Subscribe
