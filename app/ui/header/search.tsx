// Render search bar component + dropdown
// fetch results from API on keydown (with debounce)
'use client'

import { useState, SyntheticEvent } from 'react';
import Link from 'next/link';

// Next
import { useSearchParams } from 'next/navigation';

// Utils
import { useDebouncedCallback } from 'use-debounce';

// MUI
import { TextField, InputAdornment, IconButton, Grid, Autocomplete } from '@mui/material'; 
import { Search as SearchIcon } from '@mui/icons-material';

// Types
import { Book } from '@/app/types/types';
import { QueryResult } from '@vercel/postgres';

interface Props {
    books: QueryResult<Book>;
}

export const Search = ( { books }: Props  ) => {
    // const searchParams = useSearchParams();

    // const [ searchResults, setSearchResults ] = useState<Book[]>( [] );
    // const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>( null );
    const [ selectedBook, setSelectedBook ] = useState<number | null>( null );

    const handleSearch = useDebouncedCallback( async ( e: SyntheticEvent<Element, Event>, term: string ) => {
        const foundBook = books.rows.find( book => book.title.toLowerCase().includes( term.toLowerCase() ) )?.id || null;
        setSelectedBook( foundBook );
        // setSearchResults( foundBooks );
        // try {
        //     const response = await searchBooks( term );
        //     // const response = await fetch( `/api/searchBooks?searchParam=${ term }` );
        //     // const fetchedData = await response.json();
        //     console.log( { response } );
        //     // console.log( { fetchedData } );
        // } catch ( e ) {
        //     console.error( e );
        //     throw e;
        // }
        // const params = new URLSearchParams(searchParams);
        // if (term) {
        //     params.set('query', term);
        // } else {
        //     params.delete('query');
        // }
        // replace(`${pathname}?${params.toString()}`);
        // const data = await searchBooks( term );
        // console.log({ data });
    }, 300 );

    return (
        <Grid
            container
            flexDirection='column'
        >
            <Autocomplete
                freeSolo
                disableClearable
                // defaultValue={ searchParams.get('query')?.toString() }
                // onFocus={ ( e ) => setAnchorEl( e.currentTarget ) }
                onChange={ ( e, value ) => handleSearch( e, value ) }
                options={ books.rows.map( book => book.title ) }
                renderInput={
                    ( params ) => (
                        <TextField
                            { ...params }
                            size='small'
                            InputProps={ {
                                ...params.InputProps
                                , type: 'search'
                                , endAdornment: (
                                    <Link href={  `/books/${ selectedBook }` }>
                                        <InputAdornment position='end'>
                                            <IconButton>
                                                <SearchIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    </Link>
                                )
                                , style: {
                                    backgroundColor: 'whitesmoke',
                                    width: '12rem'
                                }
                            } }
                        />
                    )
                }
            />
            {/* <Grid item>
                <Menu
                    open={ searchResults.length > 0 }
                    anchorEl={ anchorEl }
                >
                    {
                        searchResults.map( ( book: Book ) => {
                            return (
                                <MenuItem key={ book.id }>
                                    { book.title }
                                </MenuItem>
                            )
                        } )
                    }
                </Menu>
            </Grid> */}
        </Grid>
    );
};
