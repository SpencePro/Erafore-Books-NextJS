// Header component
// renders nav-links, random button, search, and title-img
// collapse when scrolling (hide title-img, remove text from buttons (icon only) + tooltips, keep search)
// 'use client';

import Image from "next/image";
import Link from "next/link";

// MUI
import { Grid, Typography } from "@mui/material";

//Components
import NavLinks from "./nav-links";
import { RandomButton } from "./random";
import { Search } from "./search";

// Utils
import { fetchBooks } from "@/app/utils/data";

export const Header = async () => {
    const books = await fetchBooks();
    const booksCount = books.rowCount;
    return (
        <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            flexWrap='nowrap'
            sx={ {
                padding: '1rem'
                , position: 'sticky'
                , top: 0
                , backgroundColor: '#420259'
                , color: 'white'
                , zIndex: 1
            } }
        >
            <Grid item>
                <Link href='/'>
                    <Image
                        src='/home/site-logo-large.png'
                        height={ 120 }
                        width={ 120 }
                        alt='Site Image'
                    />
                </Link>
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
            <Grid
                container
                width='fit-content'
                flexWrap='nowrap'
            >
                <NavLinks/>
                <RandomButton booksCount={ booksCount }/>
            </Grid>
            <Grid
                item
                display='flex'
                alignItems='center'
            >
                <Search books={ books } />
            </Grid>
        </Grid>
    );
};
