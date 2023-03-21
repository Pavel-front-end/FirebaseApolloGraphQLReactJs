import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Box from '@mui/material/Box'
import { useStyles } from './styles'

export interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.root}>
      <Header />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
