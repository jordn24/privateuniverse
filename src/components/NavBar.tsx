'use client'

import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { signOut } from 'next-auth/react'; // useSession hook

const NavBar = () => {

    return (
        <Box display='flex' justifyContent='center' alignItems='center' >
            <Breadcrumb separator='-' marginTop={10}>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => signOut()}>Sign Out</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} href='/data'>Data</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    );
}

export default NavBar;
