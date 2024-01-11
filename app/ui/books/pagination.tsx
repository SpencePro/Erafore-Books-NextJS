'use client'

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Utils

// MUI
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// Types
import { Dispatch, SetStateAction } from 'react';
import { Book } from '@/app/types/types';
import { QueryResult } from '@vercel/postgres';

export const Pagination = ( {
    totalPages
    , setCurrentBooks
    , books
}: {
    totalPages: number;
    setCurrentBooks: Dispatch<SetStateAction<Book[]>>;
    books: Book[];
} ) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams?.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams || '');
        params.set('page', pageNumber.toString());
        if ( pageNumber === 1 ) {
            return `${ pathname }`;
        }
        return `${pathname}?${params.toString()}`;
    };

    const handlePage = ( pageNumber: number, direction: string ) => {
        window.scrollTo( 0, 0 );
        if ( direction === 'left' ) {
            const offset1 = ( Number( pageNumber ) * 10 ) - 10;
            const offset2 = Number( pageNumber ) * 10;
            setCurrentBooks( books.slice( offset1, offset2 ) )
        } else {
            const offset1 = ( Number( pageNumber ) - 1 ) * 10;
            const offset2 = Number( pageNumber ) * 10;
            setCurrentBooks( books.slice( offset1, offset2 ) );
        }
    };

    useEffect( () => {
        handlePage( currentPage, 'left' );
    }, [ currentPage ] );

    const PaginationArrow = ({
        direction
        , href
        , disabled
    }: {
        direction: string;
        href: string;
        disabled: boolean;
    }) => {
        const icon = direction === 'left'
            ? (
                <IconButton
                    disabled={ disabled }
                    onClick={ () => handlePage( currentPage - 1, 'left' ) }
                >
                    <ArrowLeftIcon/>
                </IconButton>
            )
            : (
                <IconButton
                    disabled={ disabled }
                    onClick={ () => handlePage( currentPage + 1, 'right' ) }
                >
                    <ArrowRightIcon/>
                </IconButton>
            )
        ;

        return (
            <Link
                href={ href }
                style={
                    disabled
                        ? { pointerEvents: 'none' }
                        : {} 
                }
            >
                { icon }
            </Link>
        )
    };

    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{
                margin: '1rem'
            }}
        >
            <Grid item>
                <PaginationArrow
                    direction='left'
                    href={ createPageURL( currentPage - 1 ) }
                    disabled={ currentPage <= 1 }
                />
            </Grid>
            <Grid item>
                <Typography variant='h6'>
                    { currentPage }
                </Typography>
            </Grid>
            <Grid item>
                <PaginationArrow
                    direction='right'
                    href={ createPageURL( currentPage + 1 ) }
                    disabled={ currentPage >= totalPages }
                />
            </Grid>
        </Grid>
    );
};
