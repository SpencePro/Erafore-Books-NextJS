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
import { Grid, Typography, Paper, Tooltip, Button } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';

// Types
import { Book, Series, World } from '@/app/types/types';
import { QueryResult } from '@vercel/postgres';

// Styles
import { CardContents, BookCard, OnSaleRibbon, SynopsisStyle } from './styles';

interface Props {
    books: QueryResult<Book>;
    series: QueryResult<Series>;
    worlds: QueryResult<World>;
}

export const BooksList = ( {
    books
    , series
    , worlds
}: Props ) => {
    const [ currentBooks, setCurrentBooks ] = useState<Book[]>( books.rows.slice( 0, 10 ) );
    const [ booksCount, setBooksCount ] = useState<number>( books.rowCount );
    const [ filteredBooks, setFilteredBooks ] = useState<Book[]>( books.rows );

    return (
        <Grid
            container
            flexDirection='column'
        >
            <Filters
                series={ series }
                worlds={ worlds }
                books={ books }
                setCurrentBooks={ setCurrentBooks }
                currentBooks={ currentBooks }
                setBooksCount={ setBooksCount }
                setFilteredBooks={ setFilteredBooks }
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
                                                    height={ 300 }
                                                    width={ 300 }
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
                                                flexWrap='nowrap'
                                            >
                                                <Grid item>
                                                    <Link href={ `/books/${ book.id }` }>
                                                        <Typography
                                                            variant='body1'
                                                            fontWeight='bold'
                                                        >
                                                            { book.title } {
                                                                book.audio_book
                                                                    ? (
                                                                        <Tooltip title='Available as an Audiobook'>
                                                                            <HeadphonesIcon/>
                                                                        </Tooltip>
                                                                    )
                                                                    : null
                                                            }
                                                        </Typography>
                                                    </Link>
                                                </Grid>
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
                                                    <Typography
                                                        variant='body1'
                                                        sx={ SynopsisStyle }
                                                    >
                                                        { book.synopsis }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                justifyContent='center'
                                            >
                                                <Link href={ `/books/${ book.id }` }>
                                                    <Button variant='outlined'>See More</Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    } )
                }
                {
                    currentBooks.length === 0
                    && (
                        <Grid
                            container 
                            justifyContent='center'>
                            <Typography variant='body1'>
                                There are no books that match the filters.
                            </Typography>
                        </Grid>
                    )
                }
            </Grid>
            <Pagination
                totalPages={ Math.ceil( booksCount / 10 ) || 0 }
                setCurrentBooks={ setCurrentBooks }
                books={ filteredBooks }
            />
        </Grid>
    );
};
