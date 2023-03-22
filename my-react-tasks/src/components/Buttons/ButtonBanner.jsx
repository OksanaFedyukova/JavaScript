import { Button } from "@mui/material"

export const ButtonContainer = () => {
    return (
        <Button
            variant='contained' 
            sx={{
                backgroundColor: "primary",
                borderRadius: 0,
                padding: '20px',
                mt: '30px',
                width: '100%',
                '&:hover': {
                    color: 'white',
                },
                fontWeight: 'bold',
            }}
        >
            Donate
        </Button>
    )
}