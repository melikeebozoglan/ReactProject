//Loader.tsx
import React from 'react';

interface LoaderProps {
    text?: string;
};

function Loader({
    text = 'Loader',
}: LoaderProps) {
    return (
        <h1>
            {text}
        </h1>
    );
};

export default Loader;