import React from 'react';
import Link from '../Link';

const Header = ({ children, path, pathName, ...props }) => {
    return (
        <div>
            <h1>{children}</h1>
            <Link href={path}>{pathName}</Link>
        </div>
    )
}

export default Header;