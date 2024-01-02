// Render banner image + link to latest release
// Loading skeleton
'use client'

import Image from "next/image";
import {
    Grid
    , Typography
} from "@mui/material"
import bgImg from '../../../public/home/document-1729019_1920-edit.jpg';

// TODO: call BE to get latest book
// TODO: Render loading skeleton while calling BE
// TODO: Scroll down on bg image

export const Latest = () => {
    return (
        <Grid
            container
            style={{
                backgroundImage: `url(${ bgImg.src })`
                , width: '100%'
            }}
        >
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
                        The Latest Release
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
