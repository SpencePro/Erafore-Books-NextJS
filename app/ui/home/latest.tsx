// Render banner image + link to latest release
// Loading skeleton
// 'use client'

import Image from "next/image";
import Link from "next/link";
import {
    Grid
    , Typography
} from "@mui/material"
import bgImg from '../../../public/home/document-1729019_1920-edit.jpg';

// Utils
import { fetchLatestBook } from "@/app/utils/data";

// TODO: Render loading skeleton while calling BE
// TODO: Scroll down on bg image

export const Latest = async () => {
    const latestBook = await fetchLatestBook();
    return (
        <Grid
            container
            style={{
                backgroundImage: `url(${ bgImg.src })`
                , width: '100%'
                , marginBottom: '2rem'
                , padding: '1rem'
                , color: 'white'
            }}
        >
            <Grid
                container
                flexDirection='column'
                textAlign='center'
                justifyContent='center'
            >
                <Grid item>
                    <Typography variant='h5'>
                        The Latest Release
                    </Typography>
                </Grid>
                <Grid
                    container
                    justifyContent='center'
                >
                    <Grid
                        item
                        width='fit-content'
                        sx={{
                            border: '3px solid white'
                        }}
                    >
                        <Link href={ `/books/${ latestBook.rows[ 0 ].id }` }>
                            <Image
                                src={ `/books/${ latestBook.rows[ 0 ].cover_image }.jpg` }
                                height={ 200 }
                                width={ 200 }
                                alt={ `Cover image of ${ latestBook.rows[ 0 ].title }`}
                            />
                        </Link> 
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        variant='body1'
                        fontWeight='bold'
                    >
                        { latestBook.rows[ 0 ].title }
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
