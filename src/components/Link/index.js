import React from 'react';
import NextLink from 'next/link';
import { LinkStyle } from './LinkStyle';

export default function Link({children, href, ...props}){
    return (
        <>
            <LinkStyle />
            <NextLink href={href}>
                <a passHref {...props}>{children}</a>
            </NextLink>
        </>
    );
}