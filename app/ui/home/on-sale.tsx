// Render banner image + link to book(s) on sale
// Loading skeleton
// 'use client'

import Image from "next/image";
import Link from "next/link";
import {
    Grid
    , Typography
} from "@mui/material"
import bgImg from '../../../public/home/manuscript-3914930_1920.jpg';

// Utils
import { fetchOnSaleBook } from "@/app/utils/data";

// TODO: Scroll down on bg image

export const OnSale = async () => {
    const onSaleBook = await fetchOnSaleBook();
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
                <Grid
                    container
                    justifyContent='center'
                >
                    <Grid
                        item
                        width='fit-content'
                    >
                        <Link href={ `/books/${ onSaleBook.rows[ 0 ].id }` }>
                            <Image
                                src={ `/books/${ onSaleBook.rows[ 0 ].cover_image }.jpg` }
                                height={ 200 }
                                width={ 200 }
                                alt={ `Cover image of ${ onSaleBook.rows[ 0 ].title }`}
                            />
                        </Link> 
                    </Grid>
                </Grid>
                <Grid item>
                <Typography variant="body1">
                        { onSaleBook.rows[ 0 ].title }
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
