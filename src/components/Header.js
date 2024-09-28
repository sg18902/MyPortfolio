import React, { useState, useEffect, useRef } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Popover,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useNavigate } from "react-router-dom";
import ContactMe from "./ContactMe";
import resume from "../assets/resume.pdf"; // Path to your resume file


// Update the logo image path
import programmerLogo from '../assets/programmer.png';
import LeetcodeLogo from '../assets/leetcode.png'
import InstagramIcon from "../assets/Instagram.webp";
import LinkedInIcon from "../assets/linkedin.webp"
import GithubIcon from "../assets/github.png";
import PinteredtIcon from "../assets/pinterest.webp";
import CredlyIcon from "../assets/credly.svg"

const socials = [
    {
        icon: <img src={GithubIcon} alt="GitHub" style={{ width: 25, height: 25, marginLeft: 8 }} />,
        url: "https://github.com/sg18902",
        name: "GitHub",
    },
    {
        icon: <img src={LinkedInIcon} alt="LinkedIn" style={{ width: 40, height: 40 }} />,
        url: "https://www.linkedin.com/in/goswami-shivam/",
        name: "LinkedIn",
    },
    {
        icon: <img src={PinteredtIcon} alt="Pinterest" style={{ width: 40, height: 40 }} />,
        url: "https://in.pinterest.com/amshivam18902/",
        name: "Pinterest",
    },
    {
        icon: <img src={InstagramIcon} alt="Instagram" style={{ width: 40, height: 40 }} />,
        url: "https://instagram.com/_lost.in.fiction_?igshid=NzZlODBkYWE4Ng==",
        name: "Instagram",
    },
    {
        icon: <img src={LeetcodeLogo} alt="LeetCode" style={{ width: 25, height: 25, marginLeft: 8 }} />,
        url: "https://leetcode.com/u/goswami_shivam/",
        name: "LeetCode",
    },
    {
        icon: <img src={CredlyIcon} alt="Credly" style={{ width: 25, height: 25, marginLeft: 8 }} />,
        url: "https://www.credly.com/users/shivam-goswami.bd52bbd7",
        name: "Credly",
    }
];

const Header = ({ toggleTheme, themeMode }) => {
    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const navigate = useNavigate();
    const headerRef = useRef(null);
    const [contactMeOpen, setContactMeOpen] = useState(false);

    const handleDownload = () => {
        // Trigger download by creating a link and clicking it programmatically
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Shivam_Goswami_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) return;

            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-100px)";
            }
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleNavigation = (path) => (event) => {
        navigate(path);
        handleMenuClose();
    };
    

    const handlePopoverOpen = (event) => {
        setPopoverAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setPopoverAnchorEl(null);
    };

    const handleMenuOpen = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const handleContactMeOpen = () => {
        handleMenuClose();
        setContactMeOpen(true);
    }

    const handleContactMeClose = () => {
        setContactMeOpen(false);
    }

    const open = Boolean(popoverAnchorEl);
    const id = open ? 'simple-popover' : undefined;

    const menuOpen = Boolean(menuAnchorEl);
    const menuId = menuOpen ? 'menu-popover' : undefined;

    

    return (
        <>
            <AppBar
                position="fixed"
                ref={headerRef}
                sx={{
                    backgroundColor: "primary.main",
                    transition: "transform 0.3s ease-in-out",
                    boxShadow: 3,
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {/* Left side: Logo and Name */}
                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'primary.light',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                            },
                            borderRadius: '8px',
                            padding: '8px',
                        }}
                        onClick={handlePopoverOpen}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="logo"
                            onClick={handlePopoverOpen}
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <img src={programmerLogo} alt="Logo" style={{ width: 40, height: 40 }} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                ml: 1, fontWeight: 'medium'
                            }}
                            onClick={handlePopoverOpen}
                        >
                            Shivam
                        </Typography>
                    </Box>


                    {/* Right side: Navigation Links and Theme Toggle */}
                    <Box display="flex" alignItems="center" sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                        {/* Desktop Navigation Links */}
                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}
                        >
                            <Button
                                color="inherit"
                                onClick={handleNavigation("/")}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 16px', fontWeight: 'medium'
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleNavigation("/projects")}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 16px', fontWeight: 'medium'
                                }}
                            >
                                Projects
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleNavigation("/certifications")}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 16px', fontWeight: 'medium'
                                }}
                            >
                                Certifications
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleNavigation("/experience")}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 16px', fontWeight: 'medium'
                                }}
                            >
                                Work Experience
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleNavigation("/education")}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 16px', fontWeight: 'medium'
                                }}
                            >
                                Education
                            </Button>
                            <Button
                                color="inherit"
                                onClick={handleContactMeOpen}
                                sx={{
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                        borderRadius: '8px',
                                    },
                                    boxShadow: 'none',
                                    borderRadius: '8px',
                                    padding: '8px 16px', fontWeight: 'medium'
                                }}
                            >
                                Contact Me
                            </Button>
                        </Stack>


                        {/* Theme Toggle */}
                        <IconButton
                            color="inherit"
                            onClick={toggleTheme}
                            sx={{
                                ml: 2,
                                transition: 'all 0.3s ease',
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: 'primary.light',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            {themeMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>


                        {/* Menu Icon for Mobile */}
                        <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <ContactMe
            open = {contactMeOpen}
            handleClose = {handleContactMeClose}
            />

            {/* Popover for Social Media Links */}
            <Popover
                id={id}
                open={open}
                anchorEl={popoverAnchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: { width: 250, maxWidth: '90%', padding: '16px', borderRadius: '10px' },
                }}
            >
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '16px' }}>
                        <Avatar
                            alt="Shivam Avatar"
                            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png"
                            sx={{ width: 56, height: 56, marginRight: '16px' }}
                        />
                        <Typography variant="h6">Shivam Goswami</Typography>
                    </Box>
                    <List>
                        {socials.map((social, index) => (
                            <ListItem button component="a" href={social.url} target="_blank" rel="noopener noreferrer" key={index}>
                                <ListItemIcon>
                                    {social.icon}
                                </ListItemIcon>
                                <ListItemText primary={social.name} />
                            </ListItem>
                        ))}
                    </List>
                    <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleDownload}
                    sx={{ mt: 2, borderRadius: '25px'}}
                >
                    Download Resume
                </Button>
                </Box>
            </Popover>

            {/* Menu for Mobile Navigation */}
            <Menu
                id={menuId}
                anchorEl={menuAnchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleNavigation("/")}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    Home
                </MenuItem>
                <MenuItem onClick={handleNavigation("/projects")}>
                    <ListItemIcon>
                        <TerminalIcon />
                    </ListItemIcon>
                    Projects
                </MenuItem>
                <MenuItem onClick={handleNavigation("/certifications")}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    Certifications
                </MenuItem>
                <MenuItem onClick={handleNavigation("/experience")}>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    Work Experience
                </MenuItem>
                <MenuItem onClick={handleNavigation("/education")}>
                    <ListItemIcon>
                        <SchoolIcon />
                    </ListItemIcon>
                    Education
                </MenuItem>
                <MenuItem onClick={handleContactMeOpen}>
                    <ListItemIcon>
                        <ContactMailIcon />
                    </ListItemIcon>
                    Contact Me
                </MenuItem>
            </Menu>
        </>
    );
};

export default Header;
