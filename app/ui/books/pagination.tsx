// render page number(s), left/right arrows, perform pagination logic
'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Utils
import { generatePagination } from '@/app/utils/utils';
import { fetchBooks } from '@/app/utils/data';

// MUI
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Pagination = ( {
    totalPages
    // , offset
    // , getBooks
}: {
    totalPages: number;
    // offset: number;
    // getBooks: ( offset?: number ) => Promise<void>;
} ) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        // offset = Number( pageNumber ) * 10;
        if ( pageNumber === 1 ) {
            // getBooks();
            return `${ pathname }`;
        }
        // getBooks( offset );
        return `${pathname}?${params.toString()}`;
    };

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
                >
                    <ArrowLeftIcon/>
                </IconButton>
            )
            : (
                <IconButton
                    disabled={ disabled }
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
        <Grid container>
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
