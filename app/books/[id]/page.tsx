// Individual book component
// Render large image, text card, skeleton while loading

import Link from "next/link";
import Image from "next/image";

// Utils
import { fetchSingleBookById } from "@/app/utils/data";

// MUI
import { Grid, Typography, Tooltip, Paper } from "@mui/material";
import HeadphonesIcon from '@mui/icons-material/Headphones';

// Types
import { Book } from "@/app/types/types";

// Styles
import {
    BookCard
    , CardContents
} from "@/app/ui/books/styles";

export default async function Page ( { params }: { params: { id: string } } ) {
    const id = Number( params.id );

    const bookInfo = await fetchSingleBookById( id );
    const book = bookInfo.rows[ 0 ];

    return (
        <Grid
            container
            flexDirection='column'
        >
            <Grid
                item
                textAlign='center'
            >
                <Typography variant='h4'>
                    { book.title }
                </Typography>
            </Grid>
            <Grid item>
                <Paper
                    variant="elevation"
                    square={ false }
                    sx={ BookCard }
                >
                    <Grid
                        container
                        flexWrap='nowrap'
                    >
                        <Grid item>
                            <Image
                                src={ `/books/${ book.cover_image }.jpg` }
                                height={ 400 }
                                width={ 400 }
                                alt={ `Cover image of ${ book.title }` }
                            />
                        </Grid>
                        <Grid
                            container
                            flexDirection='column'
                            sx={ CardContents }
                        >
                            {
                                book.on_sale
                                    ? (
                                        <Grid item>
                                            <Typography variant='h6'>
                                                On sale now!
                                            </Typography>
                                        </Grid>
                                    )
                                    : null
                            }
                            <Grid item>
                                <a href={ `${ book.amazon_link }` }>
                                    <Typography variant="h5">
                                        Purchase on Amazon
                                    </Typography>
                                </a>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1'>
                                    { `Published ${ book.publish_date }`}
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Typography
                                        variant='body1'
                                        sx={ {
                                            fontWeight: 'bold'
                                        } }
                                    >
                                        Series: 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link href={ `/books/?series=${ book.series }` }>
                                        <Typography variant='body1'>
                                            {/* { series?.rows.find( row => row.id === book.series )?.name } */}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <Typography
                                        variant='body1'
                                        sx={ {
                                            fontWeight: 'bold'
                                        } }
                                    >
                                        World: 
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link href={ `/books/?world=${ book.world }` }>
                                        <Typography variant='body1'>
                                            {/* { worlds?.rows.find( row => row.id === book.world )?.name } */}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                flexDirection='column'
                            >
                                <Grid item>
                                    <Typography
                                        variant='body1'
                                        sx={ {
                                            fontWeight: 'bold'
                                        } }
                                    >
                                        Synopsis:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='body1'>
                                        { book.synopsis }
                                    </Typography>
                                </Grid>
                                {
                                    book.audio_book
                                        ? (
                                            <Grid
                                                item
                                                sx={ {
                                                    marginTop: '1rem'
                                                } }
                                            >
                                                <Typography
                                                    variant='body1'
                                                    sx={ {
                                                        fontWeight: 'bold'
                                                    } }
                                                >
                                                    <HeadphonesIcon/> Available as an audio book
                                                </Typography>
                                            </Grid>
                                        )
                                        : null
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};
