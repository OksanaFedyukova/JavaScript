import { Typography } from "@mui/material"

export const TextContainer = () => {
    return (
        <>
            <Typography
                variant='h3'
                gutterBottom
                sx={{
                    typography: {
                        md: 'h4',
                        sm: 'h5',
                        xs: 'h6',
                    },
                }}
            >
                Our motto
            </Typography>
            <Typography
                variant='h1'
                gutterBottom
                sx={{
                    typography: {
                        md: 'h1',
                        sm: 'h2',
                        xs: 'h3',
                    },
                }}
            >
                Help animals
            </Typography>
            <Typography variant='body1' sx={{color: 'black'}} >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                eos similique ipsum, commodi hic ut numquam blanditiis
                repellendus omnis architecto maxime voluptates laudantium
                delectus quibusdam cum eligendi obcaecati placeat dolorem!
            </Typography>
        </>
    )
}