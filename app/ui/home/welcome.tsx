// 'use client'
import { Grid, Typography } from "@mui/material"
import clsx from "clsx"
import { Slideshow } from "./slideshow";

export const Welcome = () => {
    const quotes = [
        '"Zane was curious as to how a blender, a dehumidifier, four computers, eleven gaming consoles and a single Nokia cellphone would possibly be able to make what Rob wanted." -Welcome to the Galactic Shoppers Network'
        , '"Forget video games and the internet, buddy, junk food is what I miss the most about the apocalypse." -Jake Trevors (After School Fantasy)'
        , '"What you are does not matter. What you do, does." -Goddess Cynthia to Jelly (Royal Ooze Chronicles)'
        , '"Train, and one day honor your dreams by reaching out for them. Grow strong, grow smart, and grow kind. I leave the future in your hands." -World-Paladin Tomas Nierz (The Long Road of Adventure)'
    ];

    const renderQuote = () => {
        const randomNum = Math.floor(Math.random() * quotes.length );
        return quotes[ randomNum ];
    };

    return (
        <Grid
            container
            width='100%'
            sx={ {
                padding: '2rem'
            } }
        >
            <Grid
                container
                flexDirection='column'
                textAlign='center'
                justifyContent='center'
                width='60%'
            >
                <Grid item>
                    <Typography variant="h4">
                        Welcome to Erafore Books
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Here you can find all the information you need about the series, novels and short stories by Ian Rodgers
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        { renderQuote() }
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                width='40%'
            >
                <Slideshow/>
            </Grid>
        </Grid>
    );
};
