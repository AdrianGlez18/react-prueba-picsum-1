import React, { useState, useEffect } from 'react'

const RandomImage = () => {
    const src = 'https://picsum.photos/200';
    const [image, setImage] = useState('');
    const [allowImageUpdate, setAllowImageUpdate] = useState(true);

    const fetchNewImage = async () => {
        const response = await fetch(src);
        const blob = await response.blob();
        const imgobj = URL.createObjectURL(blob);
        setImage(imgobj);
    }

    //Required to load the first image
    useEffect(() => {
        fetchNewImage();
    }, [])

    useEffect(() => {
        const updateImage = setInterval(() => {
            if (allowImageUpdate) {
                fetchNewImage();
            }
        }, 4000);
        return () => {
            clearInterval(updateImage);
        }
    })
    return (
        <img src={image} alt="Random Image" onClick={() => setAllowImageUpdate(!allowImageUpdate)} className='cursor-pointer mt-6' />
    )
}

export default RandomImage