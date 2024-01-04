// renders buttons, icons, + links for home, books, contact

// Next
import Link from "next/link";

// MUI
import {
    Grid
    , Typography
    , Tooltip
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

// Styles
import { LinkStyle } from './styles';

const links = [
    {
      name: 'Home'
      , href: '/'
      , icon: HomeIcon
    }
    , {
      name: 'Books'
      , href: '/books'
      , icon: MenuBookIcon
    }
    , {
        name: 'Contact'
        , href: '/contact'
        , icon: PhoneEnabledIcon
    }
    // , {
    //     name: 'Random Book'
    //     // @ts-ignore
    //     , href: `/books/${ Math.floor( Math.random() * booksCount?.rows?.[ 0 ]?.count || 1 ) }`
    //     , icon: AutoStoriesIcon
    // }
];

export default function NavLinks () {

    return (
        <>
            {
                links.map( link => {
                    const LinkIcon = link.icon;
                    return (
                        <Grid
                            item
                            key={ link.name }
                            sx={ LinkStyle }
                        >
                            <Link
                                href={ link.href }
                            >
                                <LinkIcon/>
                                <Typography variant='h5'>
                                    { link.name }
                                </Typography>
                            </Link>
                        </Grid>
                    );
                } )
            }
        </>
    );
};
