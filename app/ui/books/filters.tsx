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

// Types
import { QueryResult } from "@vercel/postgres";
import { Series, World } from "@/app/types/types";

interface Props {
    series: QueryResult<Series>;
    worlds: QueryResult<World>;
}

export const Filters = ( { series, worlds }: Props ) => {
    const [ selectedSeries, setSelectedSeries ] = useState<number>( 0 );
    const [ selectedWorld, setSelectedWorld ] = useState<number>( 0 );

    const handleSelectSeries = ( value: string | number ) => {
        console.log( { value } );
        setSelectedSeries( Number( value ) );
    };

    const handleSelectWorld = ( value: string | number ) => {
        console.log( { value } );
        setSelectedWorld( Number( value ) );
    };

    const submitFilter = () => {
        console.log( {
            selectedSeries
            , selectedWorld
        } );
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
                <Typography variant='body1'>
                    { 'Filter description' }
                </Typography>
            </Grid>
        </Grid>
    );
};
