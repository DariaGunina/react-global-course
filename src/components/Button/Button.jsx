import React from 'react';
import Image from '../../assets/image.png';

export const Button = () => {
    const [showImage, setShowImage] = React.useState(false);

    return showImage ? <img src={Image} /> : <button className='header__button' onClick={() => setShowImage(true)}>Click me!</button> ;
};

export default Button;