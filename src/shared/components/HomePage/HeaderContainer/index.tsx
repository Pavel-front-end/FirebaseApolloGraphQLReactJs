import { Grid } from '@mui/material'
import React from 'react'
import HeaderHeroCarousel from './components/HeaderHeroCarousel'
import TitleContainer from './components/TitleContainer'

const HeaderContainer = () => {
  return (
    <Grid container mb={{xs:'3rem', md: '0'}} >
      <TitleContainer />
      <HeaderHeroCarousel />
    </Grid>
  )
}

export default HeaderContainer
