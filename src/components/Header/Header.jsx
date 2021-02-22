import React from 'react';
import Button from '../Button/Button';

export const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__title'>Hello World!</h1>
            <Button />
        </div>
    );
};

export default Header;