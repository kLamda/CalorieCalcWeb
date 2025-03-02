import React from 'react';
import { Box, Typography, Link, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                p: 3,
                textAlign: 'center',
            }}
            component="footer"
        >
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    Calorie Calculator
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Link
                    href="mailto:krishnakumar76068@gmail.com"
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    Contact Us
                </Link>
                <Link
                    href="https://www.linkedin.com/in/krishna-kumarr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                    sx={{ mr: 2 }}
                >
                    <LinkedInIcon />
                </Link>
                <Link
                    href="https://www.instagram.com/kkumar_404/profilecard/?igsh=OGk4cHByYW02emd0"
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                    sx={{ mr: 2 }}
                >
                    <InstagramIcon />
                </Link>
                <Link
                    href="https://www.facebook.com/krishna.kumar.90410834/"
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                >
                    <FacebookIcon />
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Avatar
                    alt="Developer Image"
                    src="/static/developer.jpg" // Replace with your image path
                    sx={{ width: 56, height: 56 }}
                />
            </Box>
        </Box>
    );
};

export default Footer;