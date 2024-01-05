// MUI
import { Grid, Typography } from "@mui/material";

// Components
import { BooksList } from "../ui/books/books-list";

// Utils
import { fetchBooks, fetchWorlds, fetchSeries, fetchBooksCount } from "../utils/data";


export default async function Page () {
    const worlds = await fetchWorlds();
    const series = await fetchSeries();
    const books = await fetchBooks();

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
            <BooksList
                books={ books }
                series={ series }
                worlds={ worlds }
            />
        </Grid>
    );
};
