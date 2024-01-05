'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import { Pagination } from "./pagination";
import { Filters } from "./filters";

// Utils

// MUI
import { Grid, Typography, Paper } from "@mui/material";

// Types
import { Book, Series, World } from "@/app/types/types";
import { QueryResult } from "@vercel/postgres";

// Styles
import { CardContents, BookCard } from "./styles";

interface Props {
    books: QueryResult<Book>;
    series: QueryResult<Series>;
    worlds: QueryResult<World>;
    // booksCount: number;
}

export const BooksList = ( {
    books
    , series
    , worlds
    // , booksCount
}: Props ) => {
    const [ currentBooks, setCurrentBooks ] = useState<Book[]>( books.rows.slice( 0, 10 ) );
    const [ booksCount, setBooksCount ] = useState<number>( books.rowCount );

    return (
        <Grid
            container
            flexDirection='column'
        >
            <Filters
                series={ series }
                worlds={ worlds }
                setCurrentBooks={ setCurrentBooks }
                setBooksCount={ setBooksCount }
            />
            <Grid
                container
                spacing={ 2 }
            >
                {
                    currentBooks.map( ( book: Book ) => {
                        return (
                            <Grid
                                item
                                key={ book.id }
                            >
                                <Paper
                                    variant="elevation"
                                    square={ false }
                                    sx={ BookCard }
                                >
                                    <Grid
                                        container
                                        flexWrap='nowrap'
                                    >
                                        <Grid item>
                                            <Link href={ `/books/${ book.id }` }>
                                                <Image
                                                    src={ `/books/${ book.cover_image }.jpg` }
                                                    height={ 200 }
                                                    width={ 200 }
                                                    alt={ `Cover image of ${ book.title }` }
                                                />
                                            </Link>
                                        </Grid>
                                        <Grid
                                            container
                                            flexDirection='column'
                                            sx={ CardContents }
                                        >
                                            <Grid item>
                                                <Link href={ `/books/${ book.id }` }>
                                                    <Typography variant="body1">
                                                        { book.title }
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='body1'>
                                                    { `Published ${ book.publish_date }`}
                                                </Typography>
                                            </Grid>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography
                                                        variant='body1'
                                                        sx={ {
                                                            fontWeight: 'bold'
                                                        } }
                                                    >
                                                        Series:
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Link href={ `/books/?series=${ book.series }` }>
                                                        <Typography variant='body1'>
                                                            { series?.rows.find( row => row.id === book.series )?.name }
                                                        </Typography>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography
                                                        variant='body1'
                                                        sx={ {
                                                            fontWeight: 'bold'
                                                        } }
                                                    >
                                                        World:
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Link href={ `/books/?world=${ book.world }` }>
                                                        <Typography variant='body1'>
                                                            { worlds?.rows.find( row => row.id === book.world )?.name }
                                                        </Typography>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                flexDirection='column'
                                            >
                                                <Grid item>
                                                    <Typography
                                                        variant='body1'
                                                        sx={ {
                                                            fontWeight: 'bold'
                                                        } }
                                                    >
                                                        Synopsis:
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body1'>
                                                        { book.synopsis }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    } )
                }
            </Grid>
            <Pagination
                totalPages={ Math.ceil( booksCount / 10 ) || 0 }
                setCurrentBooks={ setCurrentBooks }
                books={ books }
            />
        </Grid>
    );
};
