import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    maxWidth: 1280,
    flex: 1,
    flexGrow: 1,
    width: 'calc(100% - 2rem)',
    margin: '0 auto',
  },
}))