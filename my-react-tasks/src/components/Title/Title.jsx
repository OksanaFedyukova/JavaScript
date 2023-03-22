import { Typography, styled } from '@mui/material';
import React from 'react';

const TitleLogo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: 'Great Vibes, cursive',
  fontSize: '3rem',
  color: theme.palette.primary.main,

}));

export default function TitleComponent() {
  return <TitleLogo sx={{m:1, p:1}}>Cat & friends</TitleLogo>;
}
