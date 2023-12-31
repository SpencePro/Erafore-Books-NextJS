// renders buttons, icons, + links for home, books, contact
// Next
import { usePathname } from 'next/navigation';
import Link from "next/link";

// MUI
import {
    Grid
    , Typography
    , Tooltip
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
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
    //     , href: `/books/${ Math.floor( Math.random() ) }`
    //     , icon: AutoStoriesIcon
    // }
  ];

export default function NavLinks () {
    const pathname = usePathname();
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
