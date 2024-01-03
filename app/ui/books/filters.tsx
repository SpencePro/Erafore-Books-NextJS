// render dropdown filters + submit button
// form -> Formik?
'use client'

// MUI
import {
    Select
    , Grid
    , Typography
    , Button
    , MenuItem
} from "@mui/material";

// Utils

export const Filters = () => {
    const handleChangeSeries = () => {

    };

    const handleChangeWorld = () => {

    };

    const submitFilter = () => {

    };

    return (
        <Grid
            container
            width='100%'
            justifyContent='center'
            flexDirection='column'
            spacing={ 2 }
        >
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                spacing={ 2 }
            >
                <Grid item>
                    <Typography variant='h5'>
                        Series
                    </Typography>
                </Grid>
                <Grid item>
                    <Select
                        id='select-series-dropdown'
                        value={ '' }
                        label=''
                        onChange={ handleChangeSeries }
                        style={{
                            height: '2rem'
                            , width: '8rem'
                        }}
                    >
                        {
                            
                        }
                    </Select>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        World
                    </Typography>
                </Grid>
                <Grid item>
                    <Select
                        id='select-world-dropdown'
                        value={ '' }
                        label=''
                        onChange={ handleChangeWorld }
                        style={{
                            height: '2rem'
                            , width: '8rem'
                        }}
                    >
                        {
                            
                        }
                    </Select>
                </Grid>
                <Grid item>
                    <Button
                        variant='outlined'
                        onClick={ submitFilter }
                        style={{
                            height: '2rem'
                            , width: '4rem'
                        }}
                    >
                        Filter
                    </Button>
                </Grid>
            </Grid>
            <Grid
                item
                textAlign='center'
            >
                <Typography variant='body1'>
                    { 'Filter description' }
                </Typography>
            </Grid>
        </Grid>
    );
};
