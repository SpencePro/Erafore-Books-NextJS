// Render slideshow of images + changing text
// Loop through images (fade in/out) OR carousel
'use client'
import { useState } from "react";
import {
    Grid
    , Typography
} from "@mui/material"

export const Slideshow = () => {

    const [ currentImg, setCurrentImg ] = useState<number>( 0 );

    // TODO: replace with book cover images
    const images = [
        'image1'
        , 'image2'
        , 'image3'
        , 'image4'
    ];

    setTimeout( () => {
        setCurrentImg( currentImg === images.length - 1 ? 0 : ( currentImg + 1 ) );
    }, 3000 )

    // TODO: Replace text with image + link + tooltip
    return (
        <Grid item>
            <Typography variant="body1">
                { images[ currentImg ] }
            </Typography>
        </Grid>
    );
};
