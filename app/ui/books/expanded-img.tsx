// large image component when user clicks cover image on each individual book page
'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// MUI
import {
    Grid
    , Typography
    , Modal
    , Box
    , IconButton
} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

// Types
import { Book } from "@/app/types/types";

// Styles
import { ImageModalStyle, ImageBoxStyle } from "./styles";

interface Props {
    book: Book;
}

export const ExpandedImg = ( { book }: Props ) => {
    const [ modalOpen, setModalOpen ] = useState<boolean>( false );

    return (
        <>
            <Image
                src={ `/books/${ book.cover_image }.jpg` }
                height={ 400 }
                width={ 400 }
                alt={ `Cover image of ${ book.title }` }
                onClick={ () => setModalOpen( true ) }
            />
            <Modal
                open={ modalOpen }
                onClose={ () => setModalOpen( false ) }
                sx={ ImageModalStyle }
            >
                <Box
                    sx={ ImageBoxStyle }
                >
                    <IconButton onClick={ () => setModalOpen( false ) }>
                        <CloseIcon/>
                    </IconButton>
                    <Image
                        src={ `/books/${ book.cover_image }.jpg` }
                        height={ 1000 }
                        width={ 700 }
                        alt={ `Cover image of ${ book.title }` }
                    />
                    {
                        book.cover_artist
                            ? (
                                <Typography
                                    variant='body1'
                                    sx={{
                                        marginTop: '0.5rem'
                                    }}
                                >
                                    { `Art by ${ book.cover_artist }` }
                                </Typography>
                            )
                            : null
                    }
                </Box>
            </Modal>
        </>
    );
};
