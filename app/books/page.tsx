// Main body for book list
// Render filters + description
// Render array of books (card components, mapped)
// Render pagination
// 'use client'
import Image from "next/image";
import Link from "next/link";

// MUI
import { Grid, Typography } from "@mui/material";

// Components
import { Filters } from "../ui/books/filters";
import { Pagination } from "../ui/books/pagination";
import { BooksList } from "../ui/books/books-list";

// Utils
import { fetchBooks, fetchWorlds, fetchSeries, fetchBooksCount } from "../utils/data";

// Types
import { Book } from "../types/types";

export default async function Page () {
    // let offset = 0;
    const worlds = await fetchWorlds();
    const series = await fetchSeries();
    const books = await fetchBooks();
    const booksCount = await fetchBooksCount();

    // const getBooks = async ( offset?: number ) => {
    //     const currentBooks = fetchBooks( offset );
    // };

    return (
        <Grid
            container
            justifyContent='center'
            flexDirection='column'
        >
            <Grid
                item
                textAlign='center'
            >
                <Typography variant="h4">
                    Books
                </Typography>
            </Grid>
            <Grid item>
                <Filters
                    series={ series }
                    worlds={ worlds }
                />
            </Grid>
            <BooksList
                books={ books }
                series={ series }
                worlds={ worlds }
            />
            
            <Pagination
                // @ts-ignore
                totalPages={ Math.ceil( booksCount.rows[ 0 ].count / 10 ) }
                // offset={ offset }
                // getBooks={ getBooks }
            />
        </Grid>
    );
};
