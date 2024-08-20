import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const SchoolTable = ({ open, handleClose, item }) => {
    const theme = useTheme(); // Access the current theme
    const [course, setCourse] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        function updateCourseTitle(item) {
            setCourse(item?.title || '');
        }
        updateCourseTitle(item);
    }, [item]);

    useEffect(() => {
        const newData = 
            course === "Secondary School Certificate" ? [
                { Subject: "English", marks_achieved: 93, total_marks: 100, grade: 'A1' },
                { Subject: "Hindi", marks_achieved: 96, total_marks: 100, grade: 'A1' },
                { Subject: "Mathematics", marks_achieved: 96, total_marks: 100, grade: 'A1' },
                { Subject: "Science", marks_achieved: 83, total_marks: 100, grade: 'A2' },
                { Subject: "Social Science", marks_achieved: 95, total_marks: 100, grade: 'A1' }
            ] 
            : course === "High School Certificate" ? [
                { Subject: "English", marks_achieved: 89, total_marks: 100, grade: 'A2' },
                { Subject: "Mathematics", marks_achieved: 95, total_marks: 100, grade: 'A1' },
                { Subject: "Physics", marks_achieved: 95, total_marks: 100, grade: 'A1' },
                { Subject: "Chemistry", marks_achieved: 95, total_marks: 100, grade: 'A1' },
                { Subject: "Computer Science", marks_achieved: 96, total_marks: 100, grade: 'A1' }
            ] 
            : [];
    
        setData(newData);
    }, [course]);
    

    const overall_percentage = (() => {
        if (item?.title === "Secondary School Certificate") {
            return '92.6%';
        } else if (item?.title === "High School Certificate") {
            return '94%';
        } else {
            return '';
        }
    })();

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
                School Details
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
                                    School Name:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    Kendriya Vidayalaya No. 2, Colaba
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                    Course:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    {item?.title}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                    Academic Term:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    {item.year}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                                    Percentage:
                                </Typography>
                                <Typography variant="body1" sx={{ flex: 1 }}>
                                    {overall_percentage}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                <TableContainer component={Paper} elevation={4} sx={{ borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell align="center" sx={{ background: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold' }}>Subject</TableCell>
                                <TableCell align="center" sx={{ background: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold' }}>Marks Achieved</TableCell>
                                <TableCell align="center" sx={{ background: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold' }}>Total Marks</TableCell>
                                <TableCell align="center" sx={{ background: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontSize: '17px', fontWeight: 'bold' }}>Grade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">{row.Subject}</TableCell>
                                    <TableCell align="center">{row.marks_achieved}</TableCell>
                                    <TableCell align="center">{row.total_marks}</TableCell>
                                    <TableCell align="center">{row.grade}</TableCell>
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

export default SchoolTable;
