'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Pagination } from './pagination';
import { Filters } from './filters';

// Utils
import { format } from 'date-fns';

// MUI
import { Grid, Typography, Paper, Tooltip } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';

// Types
import { Book, Series, World } from '@/app/types/types';
import { QueryResult } from '@vercel/postgres';

// Styles
import { CardContents, BookCard, OnSaleRibbon } from './styles';

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
                id='right-here'
                sx={{
                    padding: '1rem 8rem 0rem 8rem'
                    , 
                }}
            >
                {
                    currentBooks.map( ( book: Book ) => {
                        return (
                            <Grid
                                item
                                key={ book.id }
                            >
                                <Paper
                                    variant='elevation'
                                    square={ false }
                                    sx={ BookCard }
                                >
                                    <Grid
                                        container
                                        flexWrap='nowrap'
                                    >
                                        <Grid item style={{ position: 'relative' }}>
                                            <Link href={ `/books/${ book.id }` }>
                                                <Image
                                                    src={ `/books/${ book.cover_image }.jpg` }
                                                    height={ 200 }
                                                    width={ 200 }
                                                    alt={ `Cover image of ${ book.title }` }
                                                />
                                            </Link>
                                            {
                                                book.on_sale
                                                    ? (
                                                        <Grid item sx={ OnSaleRibbon }>On Sale</Grid>
                                                    )
                                                    : null
                                            }
                                        </Grid>
                                        <Grid
                                            container
                                            flexDirection='column'
                                            sx={ CardContents }
                                        >
                                            <Grid
                                                container
                                                alignItems='center'
                                            >
                                                <Grid item>
                                                    <Link href={ `/books/${ book.id }` }>
                                                        <Typography
                                                            variant='body1'
                                                            fontWeight='bold'
                                                        >
                                                            { book.title }
                                                        </Typography>
                                                    </Link>
                                                </Grid>
                                                {
                                                    book.audio_book
                                                        ? (
                                                            <Grid item>
                                                                <Tooltip title='Available as an Audiobook'>
                                                                    <HeadphonesIcon/>
                                                                </Tooltip>
                                                            </Grid>
                                                        )
                                                        : null
                                                }
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='body1'>
                                                    { `Published ${ format( book.publish_date, 'MM/dd/yyyy' ) }`}
                                                </Typography>
                                            </Grid>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography
                                                        variant='body1'
                                                        sx={ {
                                                            fontWeight: 'bold'
                                                            , marginRight: '0.5rem'
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
                                                            , marginRight: '0.5rem'
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
