// SQL Queries and API calling functions
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Book } from '../types/types';

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

export async function fetchAllBooks() {
    noStore(); // maybe remove this one?
    try {
        const data = await sql<Book[]>`
            SELECT * FROM books
            ORDER BY publish_date ASC
        `;
        return data;
    } catch ( e ) {
        console.error( e );
        throw e;
    }
} 