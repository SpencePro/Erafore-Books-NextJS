// render dropdown filters + submit button
// form -> Formik?
'use client'

import { useState } from "react";

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
}

export const Filters = ( {
    series
    , worlds
    , books
    , setCurrentBooks
    , setBooksCount
    , setFilteredBooks
}: Props ) => {
    const pathname = usePathname();

    const [ selectedSeries, setSelectedSeries ] = useState<number>( 0 );
    const [ selectedWorld, setSelectedWorld ] = useState<number>( 0 );
    const [ filterActive, setFilterActive ] = useState<boolean>( false );

    const handleSelectSeries = ( value: string | number ) => {
        console.log( { value } );
        setSelectedSeries( Number( value ) );
    };

    const handleSelectWorld = ( value: string | number ) => {
        console.log( { value } );
        setSelectedWorld( Number( value ) );
    };

    const submitFilter = async () => {
        console.log( {
            selectedSeries
            , selectedWorld
        } );
        const filteredBooks = books.rows.filter( book => book.series === selectedSeries || book.world === selectedWorld );
        // const filteredBooks = await fetchFilteredBooks( selectedSeries, selectedWorld );
        console.log( { filteredBooks } );
        setCurrentBooks( filteredBooks.slice( 0, 10 ) );
        setBooksCount( filteredBooks.length );
        setFilterActive( true ); 
        setFilteredBooks( filteredBooks );
        // return `${pathname}`;
    };

    const resetFilter = () => {
        setFilterActive( false );
        setCurrentBooks( books.rows.slice( 0, 10 ) );
        setBooksCount( books.rowCount );
        setSelectedSeries( 0 );
        setSelectedWorld( 0 );
        setFilteredBooks( books.rows );
        // return `${pathname}`;
    };

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
                    <Button
                        variant='outlined'
                        onClick={ submitFilter }
                        disabled={ !selectedSeries && !selectedWorld }
                        style={{
                            height: '2rem'
                            , width: '4rem'
                        }}
                    >
                        Filter
                    </Button>
                </Grid>
            </Grid>
            <Grid
                item
                textAlign='center'
            >
                {
                    selectedSeries && filterActive
                        ? (
                            <Typography variant='body1'>
                                { series.rows.find( row => row.id === selectedSeries )?.description }
                            </Typography>
                        )
                        : selectedWorld && filterActive
                            ? (
                                <Typography variant='body1'>
                                    { worlds.rows.find( row => row.id === selectedWorld )?.description }
                                </Typography>
                            )
                            : null
                }
            </Grid>
            {
                filterActive
                    ? (
                        <Grid container justifyContent='center'>
                            <Button
                                variant='outlined'
                                onClick={ resetFilter }
                            >
                                Reset Filter
                            </Button>
                        </Grid>
                    )
                    : null
            }
        </Grid>
    );
};
