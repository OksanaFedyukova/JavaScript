import React, { useState } from 'react';
import { AppBar,Box, Toolbar, IconButton, Button, Paper, MenuItem, styled, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Menu as MenuIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';


import According from '../../According/According'
import TitleComponent from '../../Title/Title'
import ActionIcons from '../../ActionIcons/ActionIcons'

const drawerWidth = 280;

const StyledAppBar = styled(AppBar)({
  zIndex: (theme) => theme.zIndex.drawer + 1,
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    padding: 20,
  },
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledList = styled(List)({
  width: drawerWidth,
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
}));

const StyledListItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
   
  },
});

 const pages = [ 
     { label: 'Home' },
     { label: 'Volunteer' }, 
     { label: 'Stories', 
        dropdown: true,
        items: [  { label: 'Blog' },  { label: 'Podcast' }  ]},
     { label: 'Login'}
];


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

 
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  

  const menuItems = (
    <StyledList>
      <StyledListItem button>
        <StyledListItemText primary="Home" />
      </StyledListItem>
      <Divider sx={{ bgcolor: 'background.paper' }} />
      <StyledListItem button>
        <StyledListItemText primary="Volonteer" />
      </StyledListItem>
      <Divider sx={{ bgcolor: 'background.paper' }} />
       <According/>
      <Divider sx={{ bgcolor: 'background.paper' }} />
      <StyledListItem button>
        <StyledListItemText primary="Login" />
        <Divider sx={{ bgcolor: 'background.paper' }} />
      </StyledListItem>
      <Divider sx={{ bgcolor: 'background.paper' }} />
    </StyledList>
  );
  
return (
<Box sx={{mb:15}} >
  <StyledAppBar sx = {{bgcolor: 'white', p:0}}>
    <Toolbar  sx={{ maxWight: 500, ml:5, mr:5, p:1.5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
       <StyledMenuButton
         edge="start"
         color="inherit"
         aria-label="menu"
         onClick={handleMobileMenuToggle}
       >
          <MenuIcon />
        </StyledMenuButton> 
     <Box sx={{ display: { md: 'flex', m:2, p:2 } }}>
       <TitleComponent/>
     </Box>
     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           {pages.map((page, index) => (
        <Button key={page.label} sx={{ color: '#333',  fontWeight: 'bold', }} onClick={() => handleDropdownClick(index)}>
         {page.label}
          {page.dropdown && (
             <ExpandMoreIcon sx={{ ml: 1 }} />
          )}
         {page.dropdown && index === openDropdown && (
       <Box sx={{ position: 'absolute', zIndex: 1, top: '100%', left: 0 }}>
          <Paper sx={{ mt: 1, p: 1 }}>
            {page.items.map((item) => (
              <MenuItem key={item.label} sx={{ fontSize: 12,  fontWeight: 'bold', color: 'background.gray', }}>
                {item.label}
              </MenuItem>
            ))}
          </Paper>
        </Box>
      )}
     </Button>
      ))}
      </Box>
        <Box>
         <ActionIcons/>
       </Box>
     </Toolbar>
   </StyledAppBar>
  <StyledDrawer
     variant="temporary"
     anchor="left"
     open={mobileMenuOpen}
     onClose={handleMobileMenuToggle}
      > 
    {menuItems}
   </StyledDrawer>
  </Box>
);
};

export default Header;
