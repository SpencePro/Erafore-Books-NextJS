// Render banner image + link to book(s) on sale
// Loading skeleton
'use client'

import Image from "next/image";
import {
    Grid
    , Typography
} from "@mui/material"
import bgImg from '../../../public/home/manuscript-3914930_1920.jpg';

// TODO: Call BE to get book(s) that are on sale
// TODO: Scroll down on bg image

export const OnSale = () => {
    return (
        <Grid
            container
            style={{
                backgroundImage: `url(${ bgImg.src })`
                , width: '100%'
            }}
        >
            <Grid
                container
                flexDirection='column'
                textAlign='center'
                justifyContent='center'
            >
                <Grid item>
                    <Typography variant="h5">
                        On Sale Now
                    </Typography>
                </Grid>
                <Grid item>
                    {/* Book cover */}
                </Grid>
                <Grid item>
                <Typography variant="body1">
                        Book title
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
