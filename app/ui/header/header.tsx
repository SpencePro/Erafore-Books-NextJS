// Header component
// renders nav-links, random button, search, and title-img
// collapse when scrolling (hide title-img, remove text from buttons (icon only) + tooltips, keep search)
'use client';

// MUI
import { Grid, Typography } from "@mui/material";

//Components
import NavLinks from "./nav-links";

export const Header = () => {
    return (
        <Grid container>
            <Grid item>
                {/* Image */}
                Image Placeholder
            </Grid>
            <Grid
                container
                flexDirection='column'
                width='fit-content'
            >
                <Grid item>
                    <Typography variant="h4">
                        Erafore Books LLC
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Books by Ian Rodgers
                    </Typography>
                </Grid>
            </Grid>
            <Grid container width='fit-content'>
                <NavLinks/>
            </Grid>
            <Grid item>
                {/* Search */}
            </Grid>
        </Grid>
    );
};
