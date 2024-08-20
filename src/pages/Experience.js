// src/pages/Experience.js
import React from "react";
import { Typography, Container, Box, Card, useTheme, Divider, CardContent, Link, useMediaQuery } from "@mui/material";
import CmpIcon from "../assets/cmpinfotect.png";
import SciativeIcon from "../assets/sciative.png";

const Experience = () => {
    const experienceData = [
        {
            year: "Jun 2024 – Aug 2024",
            title: "Jr. Software Developer",
            institution: "Sciative Solutions",
            icon: <img src={SciativeIcon} alt="LinkedIn" style={{ width: 40, height: 40, borderRadius: '25px' }} />,
            link: 'https://drive.google.com/file/d/1AICkSFj8i5DtHHG3kN-pr19v1K8ltSEd/view?usp=sharing',
            details: [
                "During my internship, I developed Buzz, a campaign management application now utilized by the marketing team for daily strategies. Buzz enables users to schedule, manage, and gain campaign insights, including replies. I independently built the project using React.js, Fast API, MongoDB, AP Scheduler, and Selenium.",
                "Architected and implemented the front-end of Buzz using React.js, ensuring a responsive and intuitive user interface for campaign management.",
                "Designed and integrated RESTful APIs with FastAPI to handle campaign scheduling, data retrieval, and user management.",
                "Utilized MongoDB for efficient data storage and retrieval, optimizing the performance of Buzz under high load conditions.",
                "Implemented automated task scheduling using AP Scheduler, allowing campaigns to run at specific times without manual intervention.",
                "Leveraged Selenium for automated testing of the application, ensuring high reliability and minimizing bugs in production.",
                "Collaborated with cross-functional teams to gather requirements and continuously improve the application based on user feedback.",
                "Deployed the application and provided documentation and training to the marketing team, enabling them to fully utilize Buzz for their daily operations.",
            ],
        },
        {
            year: "Dec 2021 – Jan 2022",
            title: "SDE Intern - Java",
            institution: "CMP Infotech",
            icon: <img src={CmpIcon} alt="LinkedIn" style={{ width: 40, height: 40, borderRadius: '25px' }} />,
            link: 'https://drive.google.com/file/d/1AKCJstHonXwLadeJnvvsOLS3tTWTwR2a/view?usp=drive_link',
            details: [
                "Through a Java Training program and the Sports Shop Management System project, I gained experience in Java programming, libraries, and project management, including inventory, sales, database, APIs, and Agile methodologies.",
                "Developed and implemented key modules of the Sports Shop Management System, including user authentication, inventory tracking, and sales processing.",
                "Collaborated with a team to integrate MySQL database with Java applications, ensuring seamless data flow and effective data management.",
                "Utilized Java Swing to design user-friendly interfaces for the management system, improving the overall user experience.",
                "Gained hands-on experience in debugging and testing Java applications, ensuring high-quality and efficient code.",
                "Participated in Agile sprints and contributed to daily stand-ups, fostering a collaborative and productive team environment.",
            ],
        },
    ];

    const theme = useTheme(); // Access the current theme

    const gradientBackground = theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #333333, #1c1c1c 100%)'
        : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)';

    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view


    return (
        <Container sx={{ marginTop: '50px' }}>
            <Box sx={{
                background: theme.palette.mode === 'dark'
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
                        borderRadius: '8px',
                    }}
                >
                    Work Experience
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', pl : {xs : 0, md : 5} }}>
                {/* Vertical Line */}
                {!isMobile && (<Box
                    sx={{
                        position: 'absolute',
                        left: '24px', // Adjusted to center the circles
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        backgroundColor: theme.palette.primary.main,
                        zIndex: -1,
                    }}
                />)}


                {/* Education Items */}
                {experienceData.map((item, index) => (
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
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {item.year}
                            </Typography>
                        </Box>

                        {/* Circle */}
                        {!isMobile && (<Box
                            sx={{
                                position: 'absolute',
                                left: '-22px', // Adjust to position the circle on the line
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '15px',
                                height: '15px',
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: '50%',
                                zIndex: 1,
                            }}
                        />)}



                        {/* Divider Between Year and Card */}
                        <Divider
                            orientation="vertical"
                            sx={{
                                height: '100%',
                                width: '2px',
                                backgroundColor: theme.palette.primary.main,
                                mx: 2,
                            }}
                        />

                        {/* Card for Education Details */}
                        <Box sx={{ flexGrow: 1 }}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    background: gradientBackground,
                                    borderRadius: theme.shape.borderRadius,
                                    padding: {xs : 1, md : 2},
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: theme.shadows[10],
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 1,
                                            display: 'flex',
                                            alignItems: 'center', // Vertically aligns icon and text
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                mr: 1, // Adds margin to the right of the icon
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
                                                {item.institution}
                                            </Link>
                                        ) : (
                                            item.institution
                                        )}
                                    </Typography>

                                    <Typography variant="body1" sx={{ mb: 1 }}>
                                        {item.title}
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
        </Container>
    );
};

export default Experience;
