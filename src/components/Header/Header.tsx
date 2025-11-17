//Header.tsx
import React from 'react';

interface HeaderProps {
    text?: string;
};

function Header({
    text = 'Header',
}: HeaderProps) {
    return (
        <h1>
            {text}
        </h1>
    );
};

export default Header;