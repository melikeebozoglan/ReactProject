//DetailButton.tsx
import React from 'react';

interface DetailButtonProps {
    text?: string;
    onClick?: () => void;
};

function DetailButton({
    text = 'DetailButton',
    onClick,
}: DetailButtonProps) {
    return (
        <button
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default DetailButton;