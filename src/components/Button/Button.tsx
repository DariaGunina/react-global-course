import React from 'react';

interface ButtonProps {
    name: string;
    className?: string;
}

export const Button = ({
   name,
   className
}: ButtonProps) => {
    return (
        <button className={className}>{name}</button>
    );
};