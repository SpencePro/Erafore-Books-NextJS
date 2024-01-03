// Main body for book list
// Render filters + description
// Render array of books (card components, mapped)
// Render pagination

// MUI
import { Grid, Typography } from "@mui/material";

// Components
import { Filters } from "../ui/books/filters";

// Utils
import { fetchAllBooks, fetchWorlds, fetchSeries } from "../utils/data";

export default function Page () {
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
            <Grid>
                <Filters/>
            </Grid>
        </Grid>
    );
};
