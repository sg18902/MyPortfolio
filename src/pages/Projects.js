import React, { useState, useEffect, useRef } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, useTheme, Button, Link, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { ProjectData } from '../ProjectData';
import ShowAllIcon from "../assets/showAll.png";
import CarouselIcon from "../assets/carousel.png";
import ProjectPopover from '../components/ProjectPopover'; // Import the ProjectPopover component

const Projects = () => {
    const [currentCards, setCurrentCards] = useState([
        ProjectData[0],
        ProjectData[1],
        ProjectData[2]
    ]);
    const [viewAll, setViewAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [popoverAnchor, setPopoverAnchor] = useState(null);
    const theme = useTheme();
    const autoSlideRef = useRef();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view

    const updateCards = (direction) => {
        setCurrentCards((prevCards) => {
            let newCards;
            if (direction === 'prev') {
                newCards = [
                    ProjectData[(ProjectData.indexOf(prevCards[0]) - 1 + ProjectData.length) % ProjectData.length],
                    prevCards[0],
                    prevCards[1],
                ];
            } else {
                newCards = [
                    prevCards[1],
                    prevCards[2],
                    ProjectData[(ProjectData.indexOf(prevCards[2]) + 1) % ProjectData.length],
                ];
            }
            return newCards;
        });
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = setInterval(handleNext, 5000);
    };

    const handleNext = () => {
        updateCards('next');
        resetAutoSlide();
    };

    const handlePrev = () => {
        updateCards('prev');
        resetAutoSlide();
    };

    const handleCardClick = (event, project) => {
        setSelectedProject(project);
        setPopoverAnchor(event.currentTarget);
    };

    const handleClosePopover = () => {
        setPopoverAnchor(null);
        setSelectedProject(null);
    };

    useEffect(() => {
        if (!isMobile) {
            autoSlideRef.current = setInterval(handleNext, 5000);
        }
        return () => clearInterval(autoSlideRef.current);
    }, [isMobile]);

    const gradientBackground = theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #333333, #1c1c1c 100%)'
        : 'linear-gradient(135deg, #b2ebf2 30%, #00bcd4 100%)';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                backgroundColor: theme.palette.background.default,
                padding: isMobile ? `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)} ` : `${theme.spacing(4)} ${theme.spacing(4)} 0 ${theme.spacing(4)} `,
            }}
        >
            {!isMobile && (
                <Button
                    variant="contained"
                    onClick={() => setViewAll(!viewAll)}
                    sx={{
                        mb: 2,
                        backgroundColor: gradientBackground,
                        color: theme.palette.text.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        alignSelf: 'flex-end',
                    }}
                >
                    {viewAll ? (
                        <>
                            <img src={CarouselIcon} alt="View Less" style={{ marginRight: 8, width: 30, height: 30 }} /> View Less
                        </>
                    ) : (
                        <>
                            <img src={ShowAllIcon} alt="View All" style={{ marginRight: 8, width: 30, height: 30 }} /> View All
                        </>
                    )}
                </Button>
            )}
            {!viewAll && !isMobile ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            left: 10,
                            zIndex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                            color: 'white',
                            boxShadow: theme.shadows[5],
                        }}
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            transition: 'transform 0.7s ease-in-out',
                            width: '100%',
                            marginBottom: '10px',
                            marginTop: '10px'
                        }}
                    >
                        {currentCards.map((project, index) => (
                            <Card
                                key={index}
                                sx={{
                                    flex: '1 1 33.33%',
                                    p: 3,
                                    m: 2,
                                    transition: 'transform 0.5s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.08)',
                                        zIndex: 10,
                                        boxShadow: theme.shadows[15],
                                    },
                                    boxShadow: theme.shadows[5],
                                    borderRadius: theme.shape.borderRadius,
                                    background: gradientBackground, // Apply gradient background
                                    color: theme.palette.text.primary,
                                }}
                                onClick={(e) => handleCardClick(e, project)}
                            >
                                <CardMedia
                                    component="img"
                                    image={project.images[0]}
                                    alt={project.name}
                                    sx={{
                                        height: 200,
                                        objectFit: 'cover',
                                        borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            mb: 1,
                                            display: 'flex',
                                            alignItems: 'center', // Vertically aligns icon and text
                                        }}
                                    >
                                        {project.githubLink ? (
                                            <Link
                                                href={project.githubLink}
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
                                                {project.name}
                                            </Link>
                                        ) : (
                                            project.name
                                        )}
                                    </Typography>
                                    <Typography variant="body2" color={theme.palette.mode === 'dark' ? 'white' : 'black'} sx={{ mt: 1 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.stack.map((tech, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="caption"
                                                sx={{
                                                    textAlign: 'center',
                                                    p: 1,
                                                    borderRadius: '12px',
                                                    background: theme.palette.mode === 'dark'
                                                        ? 'linear-gradient(135deg, #444, #333)'  // Dark mode gradient
                                                        : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',  // Light mode gradient
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                    transition: 'background 0.3s ease',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    '&:hover': {
                                                        background: theme.palette.mode === 'dark'
                                                            ? 'linear-gradient(135deg, #555, #444)' // Dark mode hover effect
                                                            : 'linear-gradient(135deg, #c3cfe2, #e0f7fa)', // Light mode hover effect
                                                    },
                                                }}
                                            >
                                                {tech}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: 10,
                            zIndex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                            color: 'white',
                            boxShadow: theme.shadows[5],
                        }}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            ) : (
                <>
                    {isMobile ?
                        (<Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                            }}
                        >
                            {ProjectData.map((project, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        mb: 2,
                                        p: 2,
                                        borderRadius: theme.shape.borderRadius,
                                        boxShadow: theme.shadows[5],
                                        transition: 'transform 0.5s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            zIndex: 10,
                                        },
                                        background: gradientBackground, // Apply gradient background
                                        color: theme.palette.text.primary,
                                    }}
                                    onClick={(e) => handleCardClick(e, project)}
                                >
                                    <CardMedia
                                        component="img"
                                        image={project.images[0]}
                                        alt={project.name}
                                        sx={{
                                            height: 200,
                                            objectFit: 'cover',
                                            borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mb: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {project.githubLink ? (
                                                <Link
                                                    href={project.githubLink}
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
                                                    {project.name}
                                                </Link>
                                            ) : (
                                                project.name
                                            )}
                                        </Typography>
                                        <Typography variant="body2" color={theme.palette.mode === 'dark' ? 'white' : 'black'} sx={{ mt: 1 }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {project.stack.map((tech, idx) => (
                                                <Typography
                                                    key={idx}
                                                    variant="caption"
                                                    sx={{
                                                        textAlign: 'center',
                                                        p: 1,
                                                        borderRadius: '12px',
                                                        background: theme.palette.mode === 'dark'
                                                            ? 'linear-gradient(135deg, #444, #333)'  // Dark mode gradient
                                                            : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',  // Light mode gradient
                                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                        transition: 'background 0.3s ease',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        '&:hover': {
                                                            background: theme.palette.mode === 'dark'
                                                                ? 'linear-gradient(135deg, #555, #444)' // Dark mode hover effect
                                                                : 'linear-gradient(135deg, #c3cfe2, #e0f7fa)', // Light mode hover effect
                                                        },
                                                    }}
                                                >
                                                    {tech}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>)
                        : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    gap: theme.spacing(4),
                                    width: '100%',
                                }}
                            >
                                {ProjectData.map((project, index) => (
                                    <Card
                                        sx={{
                                            flex: '1 1 25%',
                                            p: 3,
                                            m: 2,
                                            transition: 'transform 0.5s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.08)',
                                                zIndex: 10,
                                                boxShadow: theme.shadows[15],
                                            },
                                            boxShadow: theme.shadows[5],
                                            borderRadius: theme.shape.borderRadius,
                                            background: gradientBackground, // Apply gradient background
                                            color: theme.palette.text.primary,
                                        }}
                                        onClick={(e) => handleCardClick(e, project)}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={project.images[0]}
                                            alt={project.name}
                                            sx={{
                                                height: 200,
                                                objectFit: 'cover',
                                                borderRadius: `${theme.shape.borderRadius} px ${theme.shape.borderRadius} px 0 0`,
                                            }}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    mb: 1,
                                                    display: 'flex',
                                                    alignItems: 'center', // Vertically aligns icon and text
                                                }}
                                            >
                                                {project.githubLink ? (
                                                    <Link
                                                        href={project.githubLink}
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
                                                        {project.name}
                                                    </Link>
                                                ) : (
                                                    project.name
                                                )}
                                            </Typography>
                                            <Typography variant="body2" color={theme.palette.mode === 'dark' ? 'white' : 'black'} sx={{ mt: 1 }}>
                                                {project.description}
                                            </Typography>
                                            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {project.stack.map((tech, idx) => (
                                                    <Typography
                                                        key={idx}
                                                        variant="caption"
                                                        sx={{
                                                            textAlign: 'center',
                                                            p: 1,
                                                            borderRadius: '12px',
                                                            background: theme.palette.mode === 'dark'
                                                                ? 'linear-gradient(135deg, #444, #333)'  // Dark mode gradient
                                                                : 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',  // Light mode gradient
                                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                            transition: 'background 0.3s ease',
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            '&:hover': {
                                                                background: theme.palette.mode === 'dark'
                                                                    ? 'linear-gradient(135deg, #555, #444)' // Dark mode hover effect
                                                                    : 'linear-gradient(135deg, #c3cfe2, #e0f7fa)', // Light mode hover effect
                                                            },
                                                        }}
                                                    >
                                                        {tech}
                                                    </Typography>

                                                ))}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        )
                    }
                </>


            )}
            {selectedProject && (
                <ProjectPopover
                    project={selectedProject}
                    open={Boolean(popoverAnchor)}
                    anchorEl={popoverAnchor}
                    onClose={handleClosePopover}
                />
            )}
        </Box>
    );
};

export default Projects;
