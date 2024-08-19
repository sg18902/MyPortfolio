// src/pages/Certifications.js
import React, { useState } from "react";
import { Typography, Container, Card, CardContent, Box, IconButton, Link, useTheme } from "@mui/material";
import OpenIcon from '../assets/file.png'; // Update the path to your icon
import { coursesData } from "../CourseData"; // Ensure this path is correct
import CoursePopover from "../components/CoursePopover"; // Ensure this path is correct

const Certifications = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentCourse, setCurrentCourse] = useState(null);
    const theme = useTheme()

    const handleClick = (event, course) => {
        setAnchorEl(event.currentTarget);
        setCurrentCourse(course);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setCurrentCourse(null);
    };

    const open = Boolean(anchorEl);

    const gradientBackground = theme.palette.mode === 'dark'
    ? 'linear-gradient( #333333, #1c1c1c )'
    : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)';


    return (
        <Container>
            <Box sx = {{marginTop: '50px', marginBottom: '40px'}}>
                <Box sx = {{ background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #333333, #1c1c1c 100%)'
    : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)',
    borderRadius: '8px',
}}>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: '20px',
                    padding: '16px',
                    boxShadow: 3,
                    backgroundColor: gradientBackground,
                    borderRadius: '8px',
                }}
            >
                Certifications
            </Typography>
            </Box>
            </Box>
            {coursesData.map((item, index) => (
                <Card
                    key={index}
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
                        mb: 2
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {item.icon && (
                                    <Box
                                        sx={{
                                            mr: 1, // Margin right to space the icon from the text
                                            display: 'inline-flex', // Ensures the icon behaves as an inline element
                                            alignItems: 'center', // Aligns icon and text vertically
                                            verticalAlign: 'middle', // Adjusts vertical alignment
                                            fontSize: 'inherit', // Inherit font size to match the text size
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                )}
                                {item.link ? (
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: theme.palette.mode === 'dark' ? 'lightblue' : 'blue',
                                            textDecoration: 'underline',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                            },
                                        }}
                                    >
                                        {item.courseName}
                                    </Link>
                                ) : (
                                    item.courseName
                                )}
                            </Typography>

                            {item.subCourses && (
                                <IconButton
                                    color="inherit"
                                    onClick={(event) => handleClick(event, item)}
                                    sx={{
                                        transition: 'all 0.3s ease',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: 'primary.light',
                                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    <img src={OpenIcon} alt="More Info" style={{ width: 25, height: 25 }} />
                                </IconButton>
                            )}
                        </Box>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Institution:</strong> {item.institution}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Certification Date:</strong> {item.certificationDate}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Number of Subcourses:</strong> {item.numberOfSubcourses}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Duration:</strong> {item.duration}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <strong>Details:</strong> {item.details}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <CoursePopover
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                course={currentCourse}
            />
        </Container>
    );
};

export default Certifications;
