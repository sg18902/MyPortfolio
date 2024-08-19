// src/components/CoursePopover.js
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
  Link,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const CoursePopover = ({ open, anchorEl, onClose, course }) => {
  const theme = useTheme(); // Access the current theme

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
        {course?.courseName} Subcourses
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
      <Card sx={{ mb: 2, borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', marginTop: '30px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                  Institution:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {course?.institution || "Institution Name"}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                  Certification Date:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {course?.certificationDate || "Certification Date"}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                  Duration:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {course?.duration || "Duration"}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                  Certification Issued To:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {course?.certificationIssuedTo || "Name"}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', width: '170px' }}>
                  Details:
                </Typography>
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {course?.details || "Course Details"}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>


        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: '16px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontWeight: 'bold', fontSize: '16px' }}>Subcourse Name</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontWeight: 'bold', fontSize: '16px' }}>Description</TableCell>
                <TableCell sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#161414' : theme.palette.primary.main, fontWeight: 'bold', fontSize: '16px' }}>Grade Achieved</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {course?.subCourses.map((subcourse, index) => (
                <TableRow key={index}>
 <TableCell>
            {subcourse.link ? (
                <Link
                    href={subcourse.link}
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
                    {subcourse.subCourseName}
                </Link>
            ) : (
                subcourse.subCourseName
            )}
        </TableCell>                  <TableCell>{subcourse.subCourseDescription}</TableCell>
                  <TableCell>{subcourse.gradeAchieved}</TableCell>
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
        {/* No additional actions needed for this example */}
      </DialogActions>
    </Dialog>
  );
};

export default CoursePopover;
