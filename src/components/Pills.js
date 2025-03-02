import React from 'react';
import { Chip, Box, styled, Paper, Typography } from '@mui/material';

// Styled Chip component for customization
const StyledChip = styled(Chip)(({ theme }) => ({
    fontSize: '1.2rem', // Larger font size
    padding: theme.spacing(1.5, 2), // Adjust padding for visual appeal
    borderRadius: '20px', // Rounded corners
    backgroundColor: ' #fc6a5b', // Light background color
    color: 'theme.palette.primary.contrastText', // Text color
    fontWeight: 500, // Slightly bolder text
    margin: '4px',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
}));

const Pills = ({ strings }) => {
    return (
        <Paper elevation={2} style={{ padding: '10px', width: '100%', height: '100%' }}> {/* Elevated Paper */}
            <Typography variant="h6" gutterBottom>
                Idenitfied Items
            </Typography>
            <Box display="flex" flexWrap="wrap"> {/* Spacing of 2 */}
                {strings.map((str, index) => (
                    <StyledChip key={index} label={str} />
                ))}
            </Box>
        </Paper>
    );
};

export default Pills;