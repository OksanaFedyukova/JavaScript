import { Grid } from "@mui/material"

export const ImageContainer = () => {
    return (
        <Grid item xs={12} sm={6}>
            <img
                src='/images/banner-cat1.png'
                alt='banner-cat1'
                style={{ width: '100%' }}
            />
        </Grid>
    )
}
