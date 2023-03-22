import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <footer>
      <Grid
        container
        sx={{
          backgroundColor: 'background.darkgrey',
          color: 'text.disabled',
          width: 'auto',
        }}
        p={4}
        pb={6}
        rowSpacing={3}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography variant='h5' gutterBottom>
            About us
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.disabled', mr: "70px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatem consectetur eos voluptatum possimus sunt error placeat
            iste voluptates tenetur iusto quia tempore temporibus dolore optio
            vero, libero ea distinctio!
          </Typography>
          <Box
            py={4}
            sx={{
              color: 'white',
            }}>
            <Facebook></Facebook>
            <Twitter sx={{pl: 2, pr: 2}}></Twitter>
            <Instagram></Instagram>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} sx={{}}>
          <Typography variant='h5' gutterBottom>
            Information
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.disabled', }}>Lorem ipsum</Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.disabled', }}>Privacy & Policy</Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.disabled', }}>Trems & Conditions</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography variant='h5' gutterBottom>
            My account
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.disabled', }}>Initiatives and projects </Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.disabled', }}>Favorite animals</Typography>
          <Typography variant='subtitle2' sx={{ color: 'text.disabled', }}>My Account</Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer