'use server';

import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_noStore as noStore } from 'next/cache';
import { Book } from '@/app/types/types';

export async function searchBooks( searchParam: string ) {
    noStore();
    // const { searchParam } = req.query;
    console.log( { searchParam } );
    if ( searchParam ) {
        try {
            const data = await sql<Book>`
                SELECT * FROM books
                WHERE title LIKE '${ searchParam as string }%'
            `;
            // res.status( 200 ).json( data );
            return data;
        } catch ( e ) {
            console.error( e );
            // res.status( 500 ).json( { error: 'Internal Server Error' } );
        }
    } else {
        // res.status( 400 ).json( { error: 'Missing searchParam in the query parameters' } );
    }
}

