import React from 'react';

import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Divider, Typography, styled } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const StyleAccordingList = styled(ListItem)(({ theme }) => ({
  paddingLeft: theme.spacing(6),
  textAlign: 'left',
}));

const According = () => {
  return (
    <Accordion sx={{ bgcolor:'primary.main', color: 'background.paper'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx ={{color:'background.paper' }} />}
        aria-controls="stories-content"
        id="stories-header"
      >
        <Typography variant="h6">Stories</Typography>
      </AccordionSummary>
      <Divider sx={{ bgcolor: 'background.paper', m: 0 }} />
      <AccordionDetails>
        <List>
          <StyleAccordingList button >
            <ListItemText primary="Blog" />
          </StyleAccordingList>
          <Divider sx={{ bgcolor: 'background.paper', m: 0 }} />
          <StyleAccordingList button>
            <ListItemText primary="Podcast" />
          </StyleAccordingList>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default According;