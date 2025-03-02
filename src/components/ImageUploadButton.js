import React, { useRef } from 'react';
import { Button } from '@mui/material';

const ImageUploadButton = ({ onImageUpload }) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && onImageUpload) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageUpload(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <Button variant="contained" onClick={handleButtonClick} fullWidth>
                Upload Image
            </Button>
        </>
    );
};

export default ImageUploadButton;