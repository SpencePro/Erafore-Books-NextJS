'use client'

import { useState } from "react";

// MUI
import { Grid, Typography, Tooltip, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export default function Page () {
    const [ copiedEmail, setCopiedEmail ] = useState<boolean>( false );
    
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText( 'eraforedevllc@gmail.com' );
            setCopiedEmail( true );
        } catch ( e ) {
            console.error( `Failed to copy text - ${ e }` );
        }
    };

    if ( copiedEmail ) {
        setTimeout( () => {
            setCopiedEmail( false );
        }, 3000 );
    }

    return (
        <Grid
            container
            flexDirection='column'
            width='100%'
            justifyContent='center'
            textAlign='center'
        >
            <Grid item>
                <Typography variant="h4">
                    Contact
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5">
                    Follow Along on Social Media
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    <a
                        href={'https://www.facebook.com/people/Ian-Rodgers-Author-Page/100064221690860/'}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FacebookIcon/> Facebook
                    </a>
                </Typography>
                <Typography variant="body1">
                    <a
                        href={'https://www.twitter.com/erafore'}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <TwitterIcon/> Twitter/X
                    </a>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5">
                    Questions? Comments? Business Propositions?
                </Typography>
            </Grid>
            <Grid>
                <Typography variant="body1">
                    <EmailIcon/>
                    eraforedevllc@gmail.com
                    <Tooltip title={ copiedEmail ? 'Email copied!' : 'Copy email address' }>
                        <IconButton onClick={ handleCopyEmail }>
                            {
                                copiedEmail
                                    ? <CheckBoxOutlinedIcon/>
                                    : <ContentPasteIcon/>
                            }
                        </IconButton>
                    </Tooltip>
                </Typography>
            </Grid>
        </Grid>
    );
};
