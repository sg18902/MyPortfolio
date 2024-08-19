import React, { useState } from "react";
import {
    Typography, Box, Container, Card, CardContent, Divider, useTheme, Link, IconButton, Avatar, useMediaQuery,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import OpenIcon from '../assets/file.png'
import CollegeTable from "../components/CollegeTable";
import KvIcon from "../assets/kv.png"
import XavierIcon from "../assets/xavier.png";

const educationData = [
    {
        year: "Jan 2021 – Jul 2024",
        title: "B.E in Computer Engineering with Honors in AIML",
        icon: <img src={XavierIcon} alt="Xavier" style={{ width: 40, height: 40 }} />,
        link: '',
        institution: "Xavier Institute of Engineering, Mahim, Maharastra",
        details: ["CGPA: 9.56 / 10", "4th Rank in the Department"],
    },
    {
        year: "Apr 2017 – May 2018",
        icon: <img src={KvIcon} alt="KV" style={{ width: 40, height: 40 }} />,
        title: "Secondary School Certificate",
        link: 'https://drive.google.com/file/d/1APoYsENAYC5_wyem8ne24x4EKot3hvs0/view?usp=sharing',
        institution: "Kendriya Vidayalaya No. 2, Colaba, Mumbai, Maharastra",
        details: ["Percentage: 92.6%", "Position of Responsiblity: House vice-captain"],
    },
    {
        year: "Apr 2019 – May 2020",
        title: "High School Certificate",
        icon: <img src={KvIcon} alt="KV" style={{ width: 40, height: 40 }} />,
        link: 'https://drive.google.com/file/d/1AQTOB90bAL16pYhxtM2HlAsR5aEIZn1N/view?usp=sharing',
        institution: "Kendriya Vidayalaya No. 2, Colaba, Mumbai, Maharastra",
        details: ["Percentage: 94%", "Position of Responsiblity: House captain"],
    },
];

const Education = () => {
    const theme = useTheme(); // Access the current theme
    const [collegeTableOpen, setCollegeTableOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view

    const gradientBackground = theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #333333, #1c1c1c 100%)'
        : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)';

    const handleCollegeTableOpen = () => {
        setCollegeTableOpen(true);
    };

    const handleCollegeTableClose = () => {
        setCollegeTableOpen(false);
    };

    return (
        <Container sx={{ marginTop: '50px' }}>
            <Box sx={{
                background: gradientBackground,
                borderRadius: '8px',
                mb: 4,
                p: 2,
            }}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: { xs: '18px', md: '20px' },
                        padding: '16px',
                        boxShadow: 3,
                        borderRadius: '8px',
                    }}
                >
                    Education
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', pl: { xs: 2, md: 5 } }}>
                {/* Vertical Line */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: '10px', md: '24px' }, // Adjust based on screen size
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: theme.palette.primary.main,
                        zIndex: -1,
                    }}
                />

                {/* Education Items */}
                {educationData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'flex-start', md: 'center' },
                            mb: 4,
                            mt: { xs: 2, md: 4 },
                            position: 'relative',
                        }}
                    >
                        {/* Year Box */}
                        <Box sx={{
                            width: { xs: '100%', md: '45px' },
                            textAlign: 'center',
                            mb: { xs: 2, md: 0 },
                            flexShrink: 0,
                            whiteSpace: { xs: 'nowrap', md: 'normal' }, // Single line for mobile, normal for PC
                            overflow: 'hidden',
                            textOverflow: { xs: 'ellipsis', md: 'clip' }, // Add ellipsis if text overflows on mobile
                        }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', width: '100%' }}>
                                {item.year}
                            </Typography>
                        </Box>


                        {/* Circle */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: '10px', md: '-22px' }, // Adjust based on screen size
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '15px',
                                height: '15px',
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: '50%',
                                zIndex: 1,
                            }}
                        />

                        {/* Divider Between Year and Card */}
                        <Divider
                            orientation={isMobile ? "horizontal" : "vertical"}
                            sx={{
                                height: isMobile ? '2px' : '100%',
                                width: isMobile ? '100%' : '2px',
                                backgroundColor: theme.palette.primary.main,
                                mx: 2,
                                mb: isMobile ? 2 : 0,
                            }}
                        />

                        {/* Card for Education Details */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: 6,
                                    },
                                    borderRadius: 2,
                                    background: gradientBackground,
                                    padding: 2,
                                }}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'row', md: 'row' }, // Keep the direction consistent for both mobile and PC
                                            alignItems: 'center', // Vertically aligns icon and text
                                            textAlign: { xs: 'left', md: 'left' }, // Align text left on mobile and PC
                                            mb: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                alignItems: 'center', // Vertically aligns icon and text
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    mr: 1, // Space between icon and text on mobile
                                                    display: 'flex',
                                                    alignItems: 'center', // Vertically aligns the icon
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                            {item.link ? (
                                                <Link
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        color: theme.palette.mode === 'dark' ? 'lightblue' : 'blue',
                                                        textDecoration: 'underline',
                                                        '&:hover': {
                                                            textDecoration: 'underline', // Ensures underline on hover
                                                        },
                                                    }}
                                                >
                                                    {item.title}
                                                </Link>
                                            ) : (
                                                item.title
                                            )}
                                        </Typography>

                                        {item.title === "B.E in Computer Engineering with Honors in AIML" && (
                                            <IconButton
                                                color="inherit"
                                                onClick={handleCollegeTableOpen}
                                                sx={{
                                                    transition: 'all 0.3s ease',
                                                    borderRadius: '8px',
                                                    '&:hover': {
                                                        backgroundColor: 'primary.light',
                                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                                    },
                                                    ml: { xs: 0, md: 2 }, // Adds space to the left of the button on PC
                                                }}
                                            >
                                                <img src={OpenIcon} alt="GitHub" style={{ width: 25, height: 25 }} />
                                            </IconButton>
                                        )}
                                    </Box>


                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                        {item.institution}
                                    </Typography>
                                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                                        {item.details.map((detail, index) => (
                                            <Box component="li" key={index} sx={{ mb: 1 }}>
                                                <Typography variant="body2">{detail}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                ))}
            </Box>
            <CollegeTable
                open={collegeTableOpen}
                handleClose={handleCollegeTableClose}
            />
        </Container>
    );
};

export default Education;
