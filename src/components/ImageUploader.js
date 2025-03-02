import React, { useState, useRef } from 'react';
import { Paper, Typography, Box } from '@mui/material';

const ImageUploader = ({ uploadText = "Upload Image", imageDataUrl, setImageDataUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageDataUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Paper
            sx={{
                width: '100%',
                height: '500px', // Set a fixed height or remove it for auto height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                textAlign: 'center',
                padding: 2,
            }}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            variant="outlined"
        >
            <input
                ref={fileInputRef}
                accept="image/*"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
            {imageDataUrl && (
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Paper
                        component="img"
                        src={imageDataUrl}
                        sx={{
                            maxWidth: '100%', // Ensure the image doesn't exceed the container width
                            maxHeight: '100%', // Ensure the image doesn't exceed the container height
                            objectFit: 'contain', // Use 'contain' to maintain aspect ratio and fit within bounds
                        }}
                        elevation={0}
                    />
                </Box>
            )}
            {isHovered && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="body1" color="white">
                        Upload Image
                    </Typography>
                </Box>
            )}
            {!imageDataUrl && (
                <Typography variant="body1" color="textSecondary">
                    {uploadText}
                </Typography>
            )}
        </Paper>
    );
};

export default ImageUploader;