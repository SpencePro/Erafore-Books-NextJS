'use client'
import Image from "next/image";
import { Grid, Typography } from "@mui/material"

export const About = () => {
    return (
        <Grid
            container
            flexDirection='column'
            justifyContent='center'
        >
            <Grid
                item
                textAlign='center'
            >
                <Typography variant="h5">
                    About the Author
                </Typography>
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item>
                        {/* Image */}
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            Graduate of George Mason University with a Major in History and a Minor in English, Ian Rodgers has been writing and creating since 4th grade. He has written and self-published 24 stories, including the widely popular “Royal Ooze Chronicles” series.
                        </Typography>
                        <Typography variant="body1">
                            When he isn&apos;t writing, Ian is reading or playing table top roleplaying games with friends. He currently lives in Virginia.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
