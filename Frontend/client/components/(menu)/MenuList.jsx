import classes from '@/components/(menu)/MenuList.module.css';
import MenuItem from './MenuItem';
import { Grid, Box } from '@mui/material';

export default function MenuList() {
    const listMenuItem = [
        { id: 1, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 2, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 3, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 4, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 5, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 6, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 7, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 8, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 9, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
        { id: 10, name: 'Pizza Hai San', size: 'Medium', price: '200,000d' },
    ];
    return (
        <>
            <Box sx={{ flexGrow: 1 }} className={classes['container']}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {listMenuItem.map((item) => (
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            key={item.id}
                        >
                            <MenuItem
                                container
                                justifyContent="center"
                                alignItems="center"
                                key={item.id}
                                item={item}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
