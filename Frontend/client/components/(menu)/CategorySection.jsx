'use client';
import { Tabs, Tab, Box } from '@mui/material';
import * as React from 'react';

import classes from './CategorySection.module.css';

export default function CategorySection() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const listCategory = [
        { id: 1, name: 'Pizza' },
        { id: 2, name: 'Gà' },
        { id: 3, name: 'Mỳ ý' },
        { id: 4, name: 'Khai vị' },
        { id: 5, name: 'Thức uống' },
    ];
    return (
        <Box sx={{ maxWidth: { xs: '80%', sm: 480 } }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {listCategory.map((category) => (
                    <Tab
                        label={category.name}
                        key={category.id}
                        sx={{ fontWeight: 'bold' }} 
                    />
                ))}
            </Tabs>
        </Box>
    );
}
