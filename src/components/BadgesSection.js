import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { badgesData } from '../BadgesData';

export default function BadgesSection({ isDarkMode }) {
    const [selectedTab, setSelectedTab] = useState('Languages');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box
            sx={{
                mt: 5,
                p: 4,
                borderRadius: '16px',
                marginBottom: '50px',
                background: isDarkMode
                    ? 'linear-gradient(135deg, #1c1c1c, #333333)'
                    : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'auto',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
                },
            }}
        >
            {/* Header Section */}
            <Box sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: isDarkMode ? '#f5f7fa' : '#333',
                    }}
                >
                    Credly Badges
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: isDarkMode ? '#ccc' : '#555',
                        fontSize: '1.1rem',
                    }}
                >
                    Badges that validate my knowledge and skill mastery.
                </Typography>
            </Box>

            {/* Content Area */}
            <Box
                sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex'
                }}
            >
                {/* Badge Grid */}
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{
                        maxWidth: '1200px',
                        padding: { xs: '10px', sm: '20px', md: '30px' },
                        paddingLeft: { xs: '10px', sm: '40px', md: '60px' },
                        paddingRight: { xs: '10px', sm: '40px', md: '60px' },
                        textAlign: 'center',
                    }}
                >
                    {badgesData.map((badge, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} style={{display: 'flex', justifyContent: 'center',}}>
                            <Box
                                sx={{
                                    width: '220px',
                                    height: '225px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        cursor: 'pointer'
                                    },
                                }}
                            >
                                {badge.icon}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
