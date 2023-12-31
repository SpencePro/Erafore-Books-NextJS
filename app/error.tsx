'use client';
 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// MUI
import { Grid, Button, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

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
            Oops!
        </Typography>
        <Typography variant='h5'>
            Either this page does not exist, or there was some other error.
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
            {/* <Grid item>
                <Button
                    variant='outlined'
                    onClick={
                        () => reset()
                    }
                >
                    Try again
                </Button> 
            </Grid> */}
        </Grid>
    </Grid>
  );
}