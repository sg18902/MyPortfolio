import React, { useState } from 'react';
import { Box, Typography, Grid, Tabs, Tab } from '@mui/material';
import { skillsData } from '../skillsData';

export default function SkillsSection({ isDarkMode }) {
    const [selectedTab, setSelectedTab] = useState('Languages');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box
            sx={{
                mt: 5,
                p: 3,
                borderRadius: '16px',
                marginBottom: '50px',
                background: isDarkMode
                    ? 'linear-gradient(135deg, #1c1c1c, #333333)'
                    : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'auto',
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: 'scale(1.02)',
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
                    Skills
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ color: isDarkMode ? '#ccc' : '#555' }}
                >
                    Explore my skills across different categories.
                </Typography>
            </Box>

            {/* Content Area */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
                    width: '100%',
                    height: { xs: 'auto', md: '300px' }, // Auto height on small screens
                }}
            >
                {/* Left Side Tabs */}
                <Tabs
                    orientation={window.innerWidth < 600 ? 'horizontal' : 'vertical'} // Horizontal on small screens
                    value={selectedTab}
                    onChange={handleChange}
                    textColor={isDarkMode ? '#f5f7fa' : '#333'}
                    sx={{
                        borderRight: {
                            xs: 'none',
                            md: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                        },
                        borderBottom: {
                            xs: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
                            md: 'none',
                        },
                        color: isDarkMode ? '#f5f7fa' : '#333',
                        mb: { xs: 2, md: 0 }, // Margin bottom on small screens
                        mr: { md: 4 }, // Margin right on medium and up screens
                        fontWeight: 'bold',
                        '& .MuiTab-root': {
                            color: isDarkMode ? '#f5f7fa' : '#333',
                            transition: 'all 0.3s ease',
                        },
                        '& .Mui-selected': {
                            color: isDarkMode ? '#f5f7fa' : '#333',
                            background: isDarkMode
                                ? 'linear-gradient(135deg, #444, #2e2e2e)'
                                : 'linear-gradient(135deg, #b2ebf2, #80deea)',
                            boxShadow: isDarkMode
                                ? '0 4px 8px rgba(0, 0, 0, 0.4)'
                                : '0 4px 8px rgba(0, 0, 0, 0.2)',
                            borderRadius: '8px',
                        },
                    }}
                >
                    {Object.keys(skillsData).map((category) => (
                        <Tab
                            key={category}
                            label={category}
                            value={category}
                            sx={{
                                textTransform: 'none',
                                color: isDarkMode ? '#f5f7fa' : '#333',
                                '&:hover': {
                                    color: isDarkMode ? '#f5f7fa' : '#333',
                                },
                            }}
                        />
                    ))}
                </Tabs>

                {/* Middle Content Area */}
                <Box sx={{ flex: 1 }}>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        sx={{
                            flexDirection: { xs: 'column', sm: 'row' }, // Stack items on small screens
                        }}
                    >
                        {skillsData[selectedTab].map((skill) => (
                            <Grid item xs={12} sm={6} md={3} key={skill.name}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        p: 2,
                                        borderRadius: '12px',
                                        background: isDarkMode
                                            ? 'linear-gradient(135deg, #444, #333)'  // Dark mode gradient
                                            : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',  // Light mode gradient
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        transition: 'background 0.3s ease',
                                        width: '100%', // Responsive width
                                        height: '130px', // Fixed height
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '&:hover': {
                                            background: isDarkMode
                                                ? 'linear-gradient(135deg, #555, #444)' // Dark mode hover effect
                                                : 'linear-gradient(135deg, #c3cfe2, #e0f7fa)', // Light mode hover effect
                                        },
                                    }}
                                >

                                    <Box
                                        sx={{
                                            width: '60px', // Adjust as necessary
                                            height: '60px', // Adjust as necessary
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {skill.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mt: 2,
                                            fontWeight: 'bold',
                                            color: isDarkMode ? '#e0f2f1' : '#00796b',
                                        }}
                                    >
                                        {skill.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mt: 1,
                                            color: isDarkMode ? '#b2ebf2' : '#00796b',
                                        }}
                                    >
                                        {skill.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
