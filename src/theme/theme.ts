import { createTheme, experimental_sx as sx, } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  interface BreakpointOverrides {
    desktop: true;
  }
}

export const colors = {
  white: '#fff',
  lightWhite: 'rgba(255, 255, 255, 0.08)',
  lightWhite2: 'rgba(255, 255, 255, 0.7)',
  purple: '#7B61FF',
  purpleLight: 'rgba(123, 97, 255, 0.15);',
  dark: '#191B23',
  lightDark: '#232632',
  blue: '#556cd6',
  grayBlue: '#323d46',
  buttleGreen: '#19857b',
  red: '#e53e3e3',
  lightGrey: '#E7EBF0',
  grey: '#b4b6b9',
  darkGrey: '#646464',
  translucentGrey: 'rgb(35, 31, 31, 0.52)'

}

// A custom theme for this app
let theme = createTheme({
  status: {
    danger: colors.red,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      desktop: 1250,
    },
  },
  typography: {
    h1: {
      fontSize: '3.75rem',
      fontWeight: '500',
    },
    h2: {
      fontSize: '2.5rem',
      LineHeight: '2.6rem',
      fontWeight: '500',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: '500',
      LineHeight: '2.1rem',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: '400',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '400',
    },
    h6: {
      fontSize: '0.5rem',
      fontWeight: '500',
    },
    body1: {
      fontSize: '1rem',
      LineHeight: '1.125rem',
      fontWeight: '500',
    },
    body2: {
      fontSize: '0.875rem',
      LineHeight: '1.875rem',
      fontWeight: '400',
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.buttleGreen,
    },
    error: {
      main: red.A400,
    },
    background: { default: colors.dark },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: `${colors.white}`,
          '&.MuiInputLabel-root.Mui-focused': {
            color: colors.white,
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: `${colors.dark}`,
        }
      }
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            background: `${colors.white}`,
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: `2px solid ${colors.white}`,
          borderRadius: '0.625rem'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: 'absolute',
          bottom: '-1.25rem',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.white,
          },
          '& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${colors.grayBlue} inset`,
            BoxShadow: `0 0 0 100px ${colors.grayBlue} inset`,
            borderRadius: '0.875rem'
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          color: colors.white,
          fontSize: '0.875rem',
          '&.Mui-selected': {
            background: colors.blue,
            borderRadius: '0.625rem',
            color: colors.white,
            fontWeight: '700',
            ':hover': {
              background: colors.blue,
            }
          },
          ':hover': {
            background: colors.grayBlue,
            borderRadius: '0.625rem',
          }
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontSize: '1.25rem',
          fontWeight: '400',
          lineHeight: '2rem',
          height: '3.5rem',
          borderRadius: '0.625rem'
        },
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            color: colors.white,
            textTransform: 'none',
            borderColor: colors.white,
            ":hover": {
              color: colors.white,
              borderColor: colors.white,
              backgroundColor: colors.lightWhite,
            }
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: colors.white,
            textTransform: 'none',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '400',
            lineHeight: '1.25rem',
            height: 'auto',
            ":hover": {
              color: colors.white,
              border: 'none',
              background: 'none',
              textDecoration: 'underline'
            }
          },
        },
      ],
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
      },
    },
    h2: {
      [theme.breakpoints.down('md')]: {
        fontSize: '1.875rem',
      },
    },
    h3: {
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
    },
    h4: {
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('md')]: {
            padding: '0',
          },
        }
      }
    }
  }
});

export default theme;