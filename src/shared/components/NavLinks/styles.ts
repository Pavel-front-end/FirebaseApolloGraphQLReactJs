import { Theme } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
    nav: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    link: {
        textTransform: 'inherit',
        fontSize: '0.875rem'
    },
    separator: {
        padding: '0',
    },
    p20: {
        textTransform: 'inherit',
        [theme.breakpoints.down('md')] : {
            fontSize: '1rem'
        },
        [theme.breakpoints.up('md')] : {
            fontSize: '1.125rem'
        }
    }

}))
