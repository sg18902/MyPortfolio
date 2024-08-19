import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import achievementsImage from '../assets/achievements.webp'; // Adjust path if necessary

export default function AchievementsSection({ isDarkMode }) {
    const achievements = [
        {
            detail: "Achieved All India Rank 11012 in GATE 2024 during final year.",
            link: "https://drive.google.com/file/d/1xVqeBRIiDdUGBscKqSKC0zWCuB5rvLMH/view?usp=sharing",
        },
        {
            detail: "Authored a research paper published in IJISAE on 'An Ensemble Approach for Comprehensive Brain Tumor Detection Using MRI-Based Machine Learning Models.'",
            link: "https://ijisae.org/index.php/IJISAE/article/view/5431#:~:text=This%20project%20proposes%20a%20system,are%20developed%20using%20multiple%20datasets.",
        },
        { detail: "Secured 1st position in SSC with a percentage of 92.6%." },
        { detail: "Ranked in the top 3 in HSC with a percentage of 94%." },
        { detail: "Achieved a top 3 rank in my Computer Engineering branch with an aggregate CGPA of 9.56." },
        { detail: "Solved over 400 problems on LeetCode, demonstrating strong problem-solving skills." },
    ];
    

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
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: isDarkMode ? '#f5f7fa' : '#333',
                    }}
                >
                    Achievements
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ color: isDarkMode ? '#ccc' : '#555' }}
                >
                    A showcase of my academic and professional accomplishments.
                </Typography>
            </Box>

            {/* Image and Achievements List */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {/* Left Side Image */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '30%' },
                        mb: { xs: 2, md: 0 },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={achievementsImage}
                        alt="Achievements"
                        style={{
                            width: '100%',
                            borderRadius: '16px',
                        }}
                    />
                </Box>

                {/* Right Side Achievements */}
                <Box
                    sx={{
                        flex: 1,
                        p: 2,
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box>
                        {achievements.map((achievement, index) => (
                            <Box
                                key={index}
                                sx={{
                                    mb: 3,
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2,
                                    '&:last-child': {
                                        mb: 0,
                                    },
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '1.25rem',
                                        color: isDarkMode ? '#e0f2f1' : '#00796b',
                                        fontWeight: 'bold',
                                        width: '35px',
                                        textAlign: 'center',
                                        background: isDarkMode ? '#444' : '#b2ebf2',
                                        borderRadius: 2,
                                        lineHeight: '35px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index + 1}
                                </Typography>
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: isDarkMode ? '#e0f2f1' : '#00796b',
                                            fontWeight: '500',
                                            mb: 0.5,
                                        }}
                                    >
                                        {achievement.detail} {achievement.link && (
                                        <IconButton
                                            href={achievement.link}
                                            target="_blank"
                                            sx={{
                                                color: isDarkMode ? '#b2ebf2' : '#00796b',
                                                padding: 0,
                                                '&:hover': {
                                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                                                },
                                            }}
                                        >
                                            <LaunchIcon />
                                        </IconButton>
                                    )}
                                    </Typography>
                                    
                                </Box>
                            </Box>
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
