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
        { id: 1, image: 'ChroniclesofaRoyalPetAPrincessandanOoze(RoyalOozeChroniclesBook1)_slideshow' }
        , { id: 24, image: 'FictionAsStrangeAsRealLife_slideshow' }
        , { id: 36, image: 'TheChainedMaidenBoundbyTruth(Book1)_slideshow' }
        , { id: 27, image: 'WelcometotheGalacticShoppersNetwork_slideshow' }
        , { id: 8, image: 'TheLongRoadofAdventureFlowersontheWayside(Book1)_slideshow' }
    ];

    setTimeout( () => {
        setCurrentImg( currentImg === images.length - 1 ? 0 : ( currentImg + 1 ) );
    }, 4000 )

    return (
        <Grid
            item
            sx={{
                position: 'relative'
                , width: '100%'
                , height: '100%'
                , overflow: 'hidden'
            }}
        >
            {
                images.map( ( img, index ) => (
                    <Link
                        key={ index }
                        href={ `/books/${ images[ currentImg ].id }` }
                    >
                        <Image
                            src={ `/books/${ img.image }.png` }
                            height={ 400 }
                            width={ 400 }
                            alt={ img.image }
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: currentImg === index ? 1 : 0,
                                transition: 'opacity 1.5s ease-in-out'
                            }}
                        />
                    </Link>
                ) )
            }
        </Grid>
    );
};
