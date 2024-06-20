import { Stack } from '@mui/material';
import React from 'react';
import burgerBanner from '../../assets/burger-banner.jpg'
import pizzaBanner from '../../assets/pizza-banner.jpg'
import tacosBanner from '../../assets/tacos-banner.jpg'

export default function Adds() {
    return (
        <div className='adds'>
            <Stack spacing={0}>
                <img src={burgerBanner} />
                <img src={pizzaBanner} />
                <img src={tacosBanner} />
            </Stack>
        </div>
    )
}