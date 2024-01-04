// SQL Queries and API calling functions
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Book, World, Series } from '../types/types';

export async function fetchLatestBook() {
    noStore();
    try {
        const data = await sql<Book>`
            SELECT * FROM books
            ORDER BY publish_date DESC
            LIMIT 1
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
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
            LIMIT 10
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
        const data = await sql<Book>`
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

export async function fetchSingleBookById( id: number ) {
    noStore();
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
