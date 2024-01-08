'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// MUI
import { Grid, Button, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function fourOfour() {
    const router = useRouter();
 
  return (
    <Grid
        container
        justifyContent='center'
        flexDirection='column'
        textAlign='center'
    >
        <Grid>
            <SentimentVeryDissatisfiedIcon fontSize='large'/>
        </Grid>
        <Typography
            variant='h4'
            textAlign='center'
            style={{
                margin: '1rem'
            }}
        >      
            404
        </Typography>
        <Typography variant='h5' id='not-found'>
            This page does not exist.
        </Typography>
        <Typography variant='h5'>
            Please try again later or go back to the previous page.
        </Typography>
        <Grid
            container
            justifyContent='center'
            spacing={ 2 }
            style={{
                marginTop: '1rem'
            }}
        >
            <Grid item>
                <Button
                    variant='outlined'
                    onClick={ () => router.back() }
                >
                    Back
                </Button> 
            </Grid>
        </Grid>
    </Grid>
  );
};
