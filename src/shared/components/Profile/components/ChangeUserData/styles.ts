import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'
import { colors } from '../../../../../theme/theme'

export const useStyles = makeStyles()((theme: Theme) => ({
  containerInput: {
    '& .special-label': {
      background: `${colors.lightDark} !important`,
      left: '0.625rem'
    }
  },
}))