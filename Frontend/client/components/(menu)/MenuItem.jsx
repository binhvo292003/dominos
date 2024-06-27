import classes from '@/components/(menu)/MenuItem.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MenuItem({ children, item }) {
    const defaultImage = '/image/pizzaHaiSan.png';
    return (
        <>
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={item.image || defaultImage}
                        alt={item.name}
                        width={100}
                        height={100}
                    />
                    <CardContent className={classes['content']}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.size}-{item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}
