import React, { useState } from 'react';
import { Button, Typography, CircularProgress } from '@mui/material';
import detectFoodAndCalories from '../Analyze/api';

const SubmitButton = ({ dataUrl, onResponse }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!dataUrl) {
            setError('No data URL provided.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await detectFoodAndCalories(dataUrl);

            onResponse(response);
        } catch (err) {
            console.error('Error submitting data:', err);
            setError('An error occurred during submission.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                fullWidth
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
            </Button>
            {error && (
                <Typography variant="body2" color="error" style={{ marginTop: '8px' }}>
                    {error}
                </Typography>
            )}
        </>
    );
};

export default SubmitButton;