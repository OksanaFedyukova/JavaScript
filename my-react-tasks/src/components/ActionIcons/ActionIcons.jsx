import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ActionIcons() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('1200px'));
  const isIpad = useMediaQuery(theme.breakpoints.between('900px', '1119px'));
  const isMobile = useMediaQuery(theme.breakpoints.down('899'));

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      alignItems: isMobile ? 'center' : 'flex-start',
      justifyContent: 'center',
      gap: isDesktop ? theme.spacing(24) : isIpad ? theme.spacing(12) : 12,
      position: isMobile ? 'fixed' : 'static',
      bottom: isMobile ? 0 : 'auto',
      left: isMobile ? 0 : 'auto',
      right: isMobile ? 0 : 'auto',
      zIndex: 1,
      width: '100%',
      minWidth: 'auto',
      bgcolor: isMobile ? '#333' : 'transparent',
      borderTop: isMobile ?  '1px solid #ccc' : 'transparent',
      }}
  >
    <ButtonGroup variant="text" size="large" aria-label="text button group" sx={{width: isMobile ? '100%' : 'auto',}}>
     <Button sx={{width: isMobile ? '33%' : 'auto'}}><FavoriteIcon sx={{color: isMobile ? '#00adb5':'#abafb3' }}/></Button>
     <Button sx={{width: isMobile ? '33%' : 'auto'}}><PersonIcon sx={{color: isMobile ? '#00adb5':'#abafb3' }}  /></Button>
     <Button sx={{width: isMobile ? '33%' : 'auto'}}><NotificationsIcon sx={{color: isMobile ? '#00adb5':'#abafb3' }}  /></Button>
    </ButtonGroup>
  </Box>
  );
}
