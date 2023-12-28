// Render banner image + link to book(s) on sale
// Loading skeleton
'use client'

import Image from "next/image";
import {
    Grid
    , Typography
} from "@mui/material"

// TODO: Call BE to get book(s) that are on sale
// TODO: Render loading skeleton while calling BE

export const OnSale = () => {
    return (
        <Grid container>
            <Grid item>
                {/* Background Image */}
            </Grid>
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
