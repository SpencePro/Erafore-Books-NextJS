import { Grid, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
    return (
        <Grid
            container
            width='100%'
            justifyContent='center'
            textAlign='center'
        >
            <Grid item>
                <Typography variant="body1">
                    Erafore Books, LLC &copy;2021
                </Typography>
                <Typography variant="body1">
                    Created by Ian Rodgers. All rights reserved.
                </Typography>
                <Typography variant="body1">
                    <a
                        href={'https://www.facebook.com/people/Ian-Rodgers-Author-Page/100064221690860/'}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FacebookIcon/> Facebook
                    </a>
                    &nbsp;-&nbsp;
                    <a
                        href={'https://www.twitter.com/erafore'}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <TwitterIcon/> Twitter/X
                    </a>
                </Typography>
                <Typography variant="body1">
                    <EmailIcon/> eraforedevllc@gmail.com
                </Typography>
            </Grid>
        </Grid>
    );
};
