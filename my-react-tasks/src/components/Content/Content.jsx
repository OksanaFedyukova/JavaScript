import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Typography,
    useMediaQuery,
    Box,
  } from '@mui/material';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import {itemData} from '../../service/data/data';
  import { useTheme } from '@mui/material/styles';
  
  const Content = () => {
    const theme = useTheme();
    const matchMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
    return (
      <>
        <Box pb={6}>
          <Typography variant='h3' gutterBottom textAlign='center' sx={{m: "50px"}}>
            Waiting for their owners
          </Typography>
          <ImageList
            variant='masonry'
            cols={matchMd ? 3 : matchSm ? 2 : 1}
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`/images/${item.img}`}
                  alt={item.title}
                />
                <ImageListItemBar
                  title={item.title}
                  sx={{
                    opacity: 0.5,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                  actionIcon={
                    <IconButton
                      sx={{
                        color: "#d5d5d5",
                        '&:hover': {
                          color: "#00adb5",
                        },
                      }}
                    >
                      <FavoriteIcon />
                    </IconButton >
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </>
    );
  };
  
  export default Content;