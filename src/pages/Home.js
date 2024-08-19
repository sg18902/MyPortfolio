import React from "react";
import { Typography, Container, Box, Grid, Avatar, Paper, useTheme } from "@mui/material";
import profileImage from "../assets/profile (5).jpg";
import Typewriter from "typewriter-effect";
import SkillsSection from "../components/SkillsSection";
import AchievementsSection from "../components/AchievementsSection";
import resume from "../assets/resume.pdf"; // Path to your resume file
import DownloadFile from "../assets/download_file.png"; // Path to your download icon

const Home = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const handleDownload = () => {
        // Trigger download by creating a link and clicking it programmatically
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Shivam_Goswami_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Container sx={{ mt: 5 }}>
            {/* Existing Section */}
            <Paper
                elevation={6}
                sx={{
                    padding: { xs: 3, md: 5 },
                    borderRadius: "16px",
                    background: isDarkMode
                        ? "linear-gradient(135deg, #1c1c1c, #333333)"
                        : "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s",
                    position: 'relative', // Make the Paper position relative
                    "&:hover": {
                        transform: "scale(1.02)",
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        zIndex: 1,
                        '& img': {
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            borderRadius: 2,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                            },
                        },
                    }}
                >
                    <img
                        src={DownloadFile}
                        alt='Download Resume'
                        onClick={handleDownload}
                    />
                </Box>
                <Grid container alignItems="center" spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h3"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: "bold",
                                    color: isDarkMode ? "#f5f7fa" : "#333",
                                }}
                            >
                                Shivam Goswami
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h2"
                                gutterBottom
                                sx={{ color: isDarkMode ? "#ccc" : "#555" }}
                            >
                                <Typewriter
                                    options={{
                                        strings: ["Software Developer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 2, color: isDarkMode ? "#aaa" : "#777" }}>
                                <Typewriter
                                    options={{
                                        strings: [
                                            "Dynamic full-stack developer with a talent for building efficient, visually appealing applications. Skilled in optimizing backend processes and embracing new technologies to deliver robust, impactful solutions."
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 35,
                                        deleteSpeed: 25,
                                        pauseFor: 5000,
                                    }}
                                />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <Avatar
                            src={profileImage}
                            alt="Profile Image"
                            sx={{
                                width: { xs: 200, md: 300 },
                                height: { xs: 200, md: 300 },
                                borderRadius: "50%",
                                border: "5px solid #fff",
                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </Grid>
                </Grid>
            </Paper>

            {/* New Section: Technical Skills */}
            <SkillsSection isDarkMode={isDarkMode} />

            <AchievementsSection isDarkMode={isDarkMode} />
        </Container>
    );
};

export default Home;
