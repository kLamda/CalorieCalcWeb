import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Paper, Typography } from '@mui/material';

const CalorieCountMeter = ({ value, startAngle = -110, endAngle = 110, valueMax = 1900, height = 150, gaugeColor = '#ff4433' }) => {
    return (
        <Paper elevation={3} style={{ padding: '10px' }}>
            <Typography variant="h6" gutterBottom>
                Calorie Information
            </Typography>
            <Gauge
                value={value}
                startAngle={startAngle}
                endAngle={endAngle}
                height={height}
                valueMax={valueMax}
                sx={{
                    [`& .${gaugeClasses.valueArc}`]: { // Target the class directly
                        stroke: 'none',
                        fill: gaugeColor, // Optional, for rounded ends
                    },
                    [`& .${gaugeClasses.valueText}`]: {
                        fontSize: '1 rem',
                        transform: 'translate(0px, 0px)',
                    },
                }}
                text={({ value, valueMax }) => `${value} / ${valueMax}`}
            />
        </Paper>
    );
};

export default CalorieCountMeter;