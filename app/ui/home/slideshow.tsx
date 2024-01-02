// Render slideshow of images + changing text
// Loop through images (fade in/out) OR carousel
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Grid
    , Typography
} from "@mui/material"

export const Slideshow = () => {

    const [ currentImg, setCurrentImg ] = useState<number>( 0 );

    // TODO: replace with book cover images
    const images = [
        'ChroniclesofaRoyalPetAPrincessandanOoze(RoyalOozeChroniclesBook1)'
        , 'FictionAsStrangeAsRealLife'
        , 'GodOfTheFreshman(TheHumanExperienceBook1)'
        , 'TheLongRoadofAdventureFlowersontheWayside(Book1)'
    ];

    setTimeout( () => {
        setCurrentImg( currentImg === images.length - 1 ? 0 : ( currentImg + 1 ) );
    }, 3000 )

    // TODO: Replace text with image + link + tooltip
    return (
        <Grid item>
            <Link href={ '/' }>
                <Image
                    src={ `/books/${ images[ currentImg ] }.jpg` }
                    height={ 200 }
                    width={ 200 }
                    alt={ images[ currentImg ] }
                />
            </Link>
            {/* <Typography variant="body1">
                { images[ currentImg ] }
            </Typography> */}
        </Grid>
    );
};
