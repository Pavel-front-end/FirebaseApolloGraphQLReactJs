import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
    header: {
        display: 'flex',
        padding: '1rem',
        justifyContent: 'space-between',
        width: '100%',
        height: '100px',
        zIndex: 1,
    },
    link: {
        textTransform: 'inherit',
    },
    dFlex: {
        display: 'flex',
    },
    logo: {
        marginRight: '3.5rem',
    }

}))
