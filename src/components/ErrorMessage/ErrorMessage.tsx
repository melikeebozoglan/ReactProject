//ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
    text?: string;
};

function ErrorMessage({
    text = 'Error',
}: ErrorMessageProps) {
    return (
        <h1>
            {text}
        </h1>
    );
};

export default ErrorMessage;