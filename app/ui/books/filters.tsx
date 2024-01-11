// render dropdown filters + submit button
// form -> Formik?
'use client'

import { useState, useEffect } from "react";

// MUI
import {
    Select
    , Grid
    , Typography
    , Button
    , MenuItem
} from "@mui/material";

// Utils
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from "next/router";
import Link from "next/link";

// Types
import { QueryResult } from "@vercel/postgres";
import { Series, World, Book } from "@/app/types/types";
import { SetStateAction, Dispatch } from "react";

interface Props {
    series: QueryResult<Series>;
    worlds: QueryResult<World>;
    books: QueryResult<Book>;
    setCurrentBooks: Dispatch<SetStateAction<Book[]>>;
    setBooksCount: Dispatch<SetStateAction<number>>;
    setFilteredBooks: Dispatch<SetStateAction<Book[]>>;
    currentBooks: Book[];
}

export const Filters = ( {
    series
    , worlds
    , books
    , setCurrentBooks
    , setBooksCount
    , setFilteredBooks
    , currentBooks
}: Props ) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // const router = useRouter();

    const [ selectedSeries, setSelectedSeries ] = useState<number>( 0 );
    const [ selectedWorld, setSelectedWorld ] = useState<number>( 0 );
    const [ filterActive, setFilterActive ] = useState<boolean>( false );
    const [ filterDescription, setFilterDescription ] = useState<string>( '' );

    const handleSelectSeries = ( value: string | number ) => {
        setSelectedSeries( Number( value ) );
    };

    const handleSelectWorld = ( value: string | number ) => {
        setSelectedWorld( Number( value ) );
    };

    const submitFilter = ( selectedSeries?: number, selectedWorld?: number ) => {
        console.log( { selectedSeries, selectedWorld } );
        const filteredBooks = books.rows.filter( book =>
            selectedSeries && !selectedWorld
                ? book.series === selectedSeries
                : !selectedSeries && selectedWorld
                    ? book.world === selectedWorld
                    : selectedSeries && selectedWorld
                        ? book.world === selectedWorld && book.series === selectedSeries
                        : null
        );
        console.log( filteredBooks.slice( 0, 10 ) );
        setCurrentBooks( filteredBooks.slice( 0, 10 ) );
        setBooksCount( filteredBooks.length );
        setFilterActive( true ); 
        setFilteredBooks( filteredBooks );
    };

    const resetFilter = () => {
        setFilterActive( false );
        setCurrentBooks( books.rows.slice( 0, 10 ) );
        setBooksCount( books.rowCount );
        setSelectedSeries( 0 );
        setSelectedWorld( 0 );
        setFilteredBooks( books.rows );
        setFilterDescription( '' );
    };

    useEffect( () => {
        if ( filterActive ) {
            if ( selectedSeries ) {
                setFilterDescription( series.rows.find( row => row.id === selectedSeries )?.description || '' );
            } else if ( selectedWorld ) {
                setFilterDescription( worlds.rows.find( row => row.id === selectedWorld )?.description || '' );
            }
        }
    }, [ currentBooks ] );

    useEffect( () => {
        console.log( 'running' );        
        const searchTerms = window.location.href.includes( '?' ) && window.location.href.split( '?' )[ 1 ].split( '=' );
        console.log( { searchTerms } );
        if ( searchTerms ) {
            const searchType = searchTerms[ 0 ];
            const searchNum = Number( searchTerms[ 1 ] );

            if ( searchType === 'series' ) {
                setSelectedSeries( searchNum );
                submitFilter( searchNum, 0 );
            } else if ( searchType === 'world' ) {
                setSelectedWorld( searchNum );
                submitFilter( 0, searchNum );
            }
        }
    }, [ pathname ] );

    return (
        <Grid
            container
            width='100%'
            justifyContent='center'
            flexDirection='column'
            spacing={ 2 }
        >
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                spacing={ 2 }
            >
                <Grid item>
                    <Typography variant='h5'>
                        Series
                    </Typography>
                </Grid>
                <Grid item>
                    <Select
                        id='select-series-dropdown'
                        value={ selectedSeries }
                        label=''
                        onChange={ e => handleSelectSeries( e.target.value ) }
                        style={{
                            height: '2rem'
                            , width: '8rem'
                        }}
                    >
                        {
                            series.rows.map( row => {
                                return (
                                    <MenuItem
                                        key={ row.id }
                                        value={ row.id }
                                    >
                                        { row.name }
                                    </MenuItem>
                                )
                            } )
                        }
                    </Select>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        World
                    </Typography>
                </Grid>
                <Grid item>
                    <Select
                        id='select-world-dropdown'
                        value={ selectedWorld }
                        label=''
                        onChange={ e => handleSelectWorld( e.target.value ) }
                        style={{
                            height: '2rem'
                            , width: '8rem'
                        }}
                    >
                        {
                            worlds.rows.map( world => {
                                return (
                                    <MenuItem
                                        key={ world.id }
                                        value={ world.id }
                                    >
                                        { world.name }
                                    </MenuItem>
                                )
                            } )
                        }
                    </Select>
                </Grid>
                <Grid item>
                    <Link href={ `/books/?${ selectedSeries > 0 ? `series=${ selectedSeries }` : '' }${ selectedSeries && selectedWorld ? '&' : '' }${ selectedWorld > 0 ? `world=${ selectedWorld }` : '' }` }>
                        <Button
                            variant='outlined'
                            onClick={ () => submitFilter( selectedSeries, selectedWorld ) }
                            disabled={ !selectedSeries && !selectedWorld }
                            style={{
                                height: '2rem'
                                , width: '4rem'
                            }}
                        >
                            Filter
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid
                item
                textAlign='center'
            >
            <Grid
                container
                justifyContent='center'
            >
                <Typography
                    variant='body1'
                    textAlign='center'
                >
                    { filterDescription }
                </Typography>
            </Grid>
            </Grid>
            {
                filterActive
                    ? (
                        <Grid
                            container
                            justifyContent='center'
                        >
                            <Link href={ `${ pathname }` }>
                                <Button
                                    variant='outlined'
                                    onClick={ resetFilter }
                                    style={{
                                        margin: '1rem'
                                    }}
                                >
                                    Reset Filter
                                </Button>
                            </Link>
                        </Grid>
                    )
                    : null
            }
        </Grid>
    );
};
