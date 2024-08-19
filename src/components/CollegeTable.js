import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    IconButton,
    useTheme,
    Box,
    Card,
    CardContent,
    Divider
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const CollegeTable = ({ open, handleClose }) => {
    const theme = useTheme(); // Access the current theme

    const data = [
        { semester: "sem 1", year: "Dec 2020", cgpa: 10 },
        { semester: "sem 2", year: "May 2021", cgpa: 9.6 },
        { semester: "sem 3", year: "Dec 2021", cgpa: 9.78 },
        { semester: "sem 4", year: "May 2022", cgpa: 9.25 },
        { semester: "sem 5", year: "Nov 2022", cgpa: 9.61 },
        { semester: "sem 6", year: "May 2023", cgpa: 9.35 },
        { semester: "sem 7", year: "Dec 2024", cgpa: 9.32 },
        { semester: "sem 8", year: "May 2024", cgpa: 9.71 },
    ];

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            sx={{
                borderRadius: '20px',
                boxShadow: 'none',
                '& .MuiPaper-root': {
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
                College Details
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleClose}
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
                <Card sx={{ mb: 4, borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', marginTop: '30px' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                    College Name:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    Xavier Institute of Engineering
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                    Branch:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    Computer Engineering with Honors in AIML
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                Academic Period:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    2020 - 2024
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                    Overall CGPA:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    9.56
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                <TableContainer component={Paper} elevation={4} sx={{ borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell align="center" sx = {{background: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold'}}>Semester</TableCell>
                                <TableCell align="center" sx = {{background:  theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold'}}>Academic Date</TableCell>
                                <TableCell align="center" sx = {{background:  theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold'}}>CGPA</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{row.semester}</TableCell>
                                    <TableCell align="center">{row.year}</TableCell>
                                    <TableCell align="center">{row.cgpa}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    justifyContent: 'center',
                    borderRadius: '0 0 20px 20px',
                    padding: '16px',
                }}
            >
                {/* No button needed for this example as specified */}
            </DialogActions>
        </Dialog>
    );
};

export default CollegeTable;
