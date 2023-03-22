import React from 'react'
import { Grid } from '@mui/material';
import { ImageContainer } from './Images/ImageBanner';
import { TextContainer } from './Text/TextContainer';
import { ButtonContainer } from '../Buttons/ButtonBanner';

const Banner = () => {
    return (
        <Grid
            container
            sx={{
                bgcolor: "background.default",
                alignItems: 'center',
                width: 'auto',
                mt: '75px'
            }}
            my={2}
            px={10}
            pb={2}
            columnSpacing={10}
        >
            <ImageContainer />
            <Grid item xs={12} sm={6}>
                <TextContainer />
                <ButtonContainer />
            </Grid>
        </Grid>
    );
};

export default Banner;