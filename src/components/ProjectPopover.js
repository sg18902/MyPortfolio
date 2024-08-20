import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
    Box,
    Card,
    CardContent,
    useTheme,
    Button,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ProjectPopover = ({ open, onClose, project }) => {
    const theme = useTheme();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            PaperProps={{
                sx: {
                    borderRadius: '20px',
                    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
                },
            }}
        >
            <DialogTitle
                align="center"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                    borderRadius: '20px 20px 0 0',
                    padding: '16px',
                    position: 'relative',
                }}
            >
                {project.name}
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ padding: '24px', backgroundColor: theme.palette.background.paper }}>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    <IconButton
                        onClick={handlePrevImage}
                        sx={{
                            position: 'absolute',
                            left: '10px',
                            zIndex: 1,
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: '50%',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                            },
                        }}
                    >
                        <ArrowLeftIcon sx={{ fontSize: '2rem', color: theme.palette.text.primary }} />
                    </IconButton>
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.name} Image ${currentImageIndex + 1}`}
                        style={{ width: '100%', borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
                    />
                    <IconButton
                        onClick={handleNextImage}
                        sx={{
                            position: 'absolute',
                            right: '10px',
                            zIndex: 1,
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: '50%',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                            },
                        }}
                    >
                        <ArrowRightIcon sx={{ fontSize: '2rem', color: theme.palette.text.primary }} />
                    </IconButton>
                </Box>
                <Card sx={{ mt: 2, borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                    <CardContent>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Description:</Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>{project.description}</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Technology Stack:</Typography>
                        <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                            {project.stack.map((tech, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    color="primary"
                                    sx={{ borderRadius: '16px', textTransform: 'none' }}
                                >
                                    {tech}
                                </Button>
                            ))}
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Languages:</Typography>
                        <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                            {project.language.map((lang, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    color="secondary"
                                    sx={{ borderRadius: '16px', textTransform: 'none' }}
                                >
                                    {lang}
                                </Button>
                            ))}
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Features:</Typography>
                        <ul>
                            {project.features.map((feature, index) => (
                                <li key={index}>
                                    <Typography variant="body1">{feature}</Typography>
                                </li>
                            ))}
                        </ul>
                        {project.githubLink && (
                            <>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>GitHub Link:</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.mode === 'dark' ? 'lightblue' :  'blue' }}>
                                        {project.githubLink}
                                    </a>
                                </Typography>
                            </>
                        )}
                        {project.deployedLink && (<>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Deployed Link:</Typography>
                            <Typography variant="body1">
                                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                    {project.deployedLink }
                                </a>
                            </Typography>
                        </>)}

                    </CardContent>
                </Card>
            </DialogContent>
            <DialogActions
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    justifyContent: 'center',
                    borderRadius: '0 0 20px 20px',
                    padding: '16px',
                }}
            >
                {/* No additional actions needed for this example */}
            </DialogActions>
        </Dialog>
    );
};

export default ProjectPopover;
