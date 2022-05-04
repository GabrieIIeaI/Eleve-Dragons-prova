import React from 'react';
import NextLink from 'next/link';

export default function Link({children, href, ...props}){
    return (
        <NextLink href={href}>
            <a passHref {...props}>{children}</a>
        </NextLink>
    );
}