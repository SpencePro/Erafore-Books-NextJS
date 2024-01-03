// Main body for book list
// Render filters + description
// Render array of books (card components, mapped)
// Render pagination
import Image from "next/image";
import Link from "next/link";

// MUI
import { Grid, Typography, Paper } from "@mui/material";

// Components
import { Filters } from "../ui/books/filters";

// Utils
import { fetchAllBooks, fetchWorlds, fetchSeries } from "../utils/data";

// Types
import { Book } from "../types/types";

export default async function Page () {
    const worlds = await fetchWorlds();
    const series = await fetchSeries();
    const books = await fetchAllBooks();

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
            <Grid
                container
                spacing={ 2 }
            >
                {
                    books.rows.map( ( book: Book ) => {
                        return (
                            <Grid
                                item
                                key={ book.id }
                            >
                                <Paper
                                    variant="elevation"
                                    square={ false }
                                >
                                    <Grid
                                        container
                                        flexWrap='nowrap'
                                    >
                                        <Grid item>
                                            <Link href={ `/books/${ book.id }` }>
                                                <Image
                                                    src={ `/books/${ book.cover_image }.jpg` }
                                                    height={ 200 }
                                                    width={ 200 }
                                                    alt={ `Cover image of ${ book.title }` }
                                                />
                                            </Link>
                                        </Grid>
                                        <Grid
                                            container
                                            flexDirection='column'
                                        >
                                            <Grid item>
                                                <Link href={ `/books/${ book.id }` }>
                                                    <Typography variant="body1">
                                                        { book.title }
                                                    </Typography>
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='body1'>
                                                    { `Published ${ book.publish_date }`}
                                                </Typography>
                                            </Grid>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography variant='body1'>
                                                        Series
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Link href={ `/books/?series=${ book.series }` }>
                                                        <Typography variant='body1'>
                                                            { series?.rows.find( row => row.id === book.series )?.name }
                                                        </Typography>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid container>
                                                <Grid item>
                                                    <Typography variant='body1'>
                                                        World
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Link href={ `/books/?world=${ book.world }` }>
                                                        <Typography variant='body1'>
                                                            { worlds?.rows.find( row => row.id === book.world )?.name }
                                                        </Typography>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                flexDirection='column'
                                            >
                                                <Grid item>
                                                    <Typography variant='body1'>
                                                        Synopsis
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body1'>
                                                        { book.synopsis }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        )
                    } )
                }
            </Grid>
        </Grid>
    );
};
