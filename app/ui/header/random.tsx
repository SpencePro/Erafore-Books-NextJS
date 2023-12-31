// Render random button + icon component
// import random book redirect function from utils/utils.ts
'use client'

// MUI
import {
    Typography
    , Tooltip
    , Button
} from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

// Types
import { Book } from "@/app/types/types";
import { QueryResult } from "@vercel/postgres";

interface Props {
    booksCount: number;
}

export const RandomButton = ( { booksCount }: Props ) => {
    const handleClick = ( e: any ) => {
        e.preventDefault();
        // @ts-ignore
        const href = `/books/${ Math.floor( Math.random() * booksCount || 1 ) }`;
        window.location.href = href;
    }
    return (
        <Button
            variant='text'
            onClick={ handleClick }
            style={ {
                textTransform: 'capitalize'
                , color: 'white'
            } }
        >
            <AutoStoriesIcon/>
            <Typography variant="h5">
                Random Book
            </Typography>
        </Button>
    );
}
