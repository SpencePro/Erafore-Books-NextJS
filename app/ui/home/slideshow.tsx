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

    const images = [
        { id: 1, image: 'ChroniclesofaRoyalPetAPrincessandanOoze(RoyalOozeChroniclesBook1)' }
        , { id: 24, image: 'FictionAsStrangeAsRealLife' }
        , { id: 36, image: 'GodOfTheFreshman(TheHumanExperienceBook1)' }
        , { id: 8, image: 'TheLongRoadofAdventureFlowersontheWayside(Book1)' }
    ];

    setTimeout( () => {
        setCurrentImg( currentImg === images.length - 1 ? 0 : ( currentImg + 1 ) );
    }, 3000 )

    return (
        <Grid item>
            <Link href={ `/books/${ images[ currentImg ].id }` }>
                <Image
                    src={ `/books/${ images[ currentImg ].image }.jpg` }
                    height={ 200 }
                    width={ 200 }
                    alt={ images[ currentImg ].image }
                />
            </Link>
        </Grid>
    );
};
