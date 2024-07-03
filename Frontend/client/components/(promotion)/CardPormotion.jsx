import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function CardPromotion({ item, children }) {
    const defaultImage = '/image/pizzaHaiSan.png';

    return (
        <Card
            sx={{
                display: 'flex',
                marginX: 20,
                marginY: 5,
                border: '1px solid #ccc',
                boxShadow: 'none',
            }}
        >
            {' '}
            <CardMedia
                component="img"
                sx={{ width: 300 }}
                image={item.image || defaultImage}
                alt={item.title || 'title'}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {item.title || 'title'}
                    </Typography>
                    <Typography color="text.secondary" component="div">
                        {item.description || 'description'}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}
