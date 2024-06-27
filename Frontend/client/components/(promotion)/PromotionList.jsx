import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardPromotion from './CardPormotion';

export default function PromotionList() {
    const listPromotion = [
        {
            id: 1,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 2,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 3,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 4,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 5,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 6,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 7,
            title: 'Promotion 1',
            description: 'Description 1',
        },
        {
            id: 8,
            title: 'Promotion 1',
            description: 'Description 1',
        },
    ];

    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                {listPromotion.map((item) => (
                    <CardPromotion key={item.id} item={item} />
                ))}
            </Box>
        </>
    );
}
