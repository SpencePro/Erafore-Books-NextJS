// SQL Queries and API calling functions
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { Book, World, Series } from '../types/types';
import { redirect } from 'next/dist/server/api-utils';
require('dotenv').config();


export async function fetchLatestBook() {
    noStore();
    // throw Error;
    try {
        const data = await sql<Book>`
            SELECT * FROM books
            ORDER BY publish_date DESC
            LIMIT 1
        `;
        return data;
    } catch ( e ) {
        if ( e && e instanceof Error ) {
            console.error( e );
            throw e;
        }
    }
    // revalidatePath('/');
}

export async function fetchOnSaleBook() {
    noStore();
    try {
        const data = await sql<Book>`
            SELECT * FROM books
            WHERE on_sale=true
            LIMIT 1
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

export async function fetchBooks( offset?: number ) {
    noStore();
    try {
        const data = await sql<Book>`
            SELECT * FROM books
            ORDER BY publish_date ASC
        `;
        // ${ offset ? `OFFSET ${ offset }` : ''}
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

export async function fetchBooksCount() {
    noStore();
    try {
        const data = await sql<Number>`
            SELECT COUNT(*) FROM books
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

export async function fetchFilteredBooks( worldId?: number, seriesId?: number ) {
    noStore();
    try {
        // if ( worldId && seriesId ) {
        //     const data = await sql<Book>`
        //         SELECT * FROM books
        //         WHERE world=${ worldId } AND series=${ seriesId }
        //         ORDER BY publish_date ASC
        //     `;
        //     return data;
        // } else if ( worldId && !seriesId ) {
        //     const data = await sql<Book>`
        //         SELECT * FROM books
        //         WHERE world=${ worldId }
        //         ORDER BY publish_date ASC
        //     `;
        //     return data;
        // } else if ( !worldId && seriesId ) {
        //     const data = await sql<Book>`
        //         SELECT * FROM books
        //         WHERE series=${ seriesId }
        //         ORDER BY publish_date ASC
        //     `;
        //     return data;
        // } else {
        //     const data = await sql<Book>`
        //         SELECT * FROM books
        //         ORDER BY publish_date ASC
        //     `;
        //     return data;
        // }
        const data = await sql<Book>`
            SELECT * FROM books
            WHERE ${
                worldId && seriesId
                    ? `world=${ worldId } AND series=${ seriesId }`
                    : worldId && !seriesId
                        ? `world=${ worldId }`
                        : !worldId && seriesId
                            ? `seriesId=${ seriesId }`
                            : ''
            }
            ORDER BY publish_date ASC
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

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

export async function fetchSingleBookById( id: number ) {
    try {
        const data = await sql<Book>`
            SELECT * FROM books
            WHERE id=${ id }
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

export async function fetchWorlds() {
    noStore();
    try {
        const data = await sql<World>`
            SELECT * FROM worlds
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}

export async function fetchSeries() {
    noStore();
    try {
        const data = await sql<Series>`
            SELECT * FROM series
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
}
