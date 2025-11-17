//Footer.tsx
import React from 'react';

interface FooterProps {
    text?: string;
};

function Footer({
    text = 'Footer',
}: FooterProps) {
    return (
        <h1>
            {text}
        </h1>
    );
};

export default Footer;