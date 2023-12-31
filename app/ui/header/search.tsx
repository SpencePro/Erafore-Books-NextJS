// Render search bar component + dropdown
// fetch results from API on keydown (with debounce)
'use client'

// Next
import {
    useSearchParams
    , usePathname
    , useRouter
} from 'next/navigation';

import { useDebouncedCallback } from 'use-debounce';

// MUI
import { TextField, Grid, InputAdornment } from '@mui/material'; 
import { Search as SearchIcon } from '@mui/icons-material';

export const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback( ( term ) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`);
          console.log(term);
    }, 300 );

    return (
        <TextField
            variant='outlined'
            defaultValue={ searchParams.get('query')?.toString() }
            size='small'
            InputProps={ {
                endAdornment: (
                    <InputAdornment position='end'>
                        <SearchIcon/>
                    </InputAdornment>
                )
            } }
        />
    );
};
