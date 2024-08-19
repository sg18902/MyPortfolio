import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Grid,
  Paper,
  useTheme,
  CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const ContactMe = ({ open, handleClose }) => {
  const theme = useTheme(); // Access the current theme
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isDarkMode = theme.palette.mode === 'dark';


  const handleclosedialog = () => {
    handleClose(); // Close the form on success
        setEmail('');
        setName('');
        setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const errors = [];

    // Validate required fields
    if (!name.trim()) {
        errors.push('Name is required');
    }
    if (!email.trim()) {
        errors.push('Email is required');
    }
    if (!message.trim()) {
        errors.push('Message is required');
    }

    // Validate email format
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (email.trim() && !emailPattern.test(email)) {
        errors.push('Please enter a valid email address');
    }

    // If there are errors, show them and return early
    if (errors.length > 0) {
        setErrorMessage(errors.join(' --- '));
        setErrorDialogOpen(true);
        return;
    }

    setLoading(true); // Set loading to true

    // Prepare form data
    const formData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
    };

    // Send data using fetch to FormSubmit
    fetch('https://formsubmit.co/ajax/shivam.prgoswami@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // Handle successful response
        setLoading(false); // Set loading to false
        setSuccessDialogOpen(true); // Open success dialog
        handleClose(); // Close the form on success
        setEmail('');
        setName('');
        setMessage('');
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error response
        setLoading(false); // Set loading to false
        setErrorMessage(error.message || 'Something went wrong'); // Set error message
        setErrorDialogOpen(true); // Open error dialog
    });
};



  const textFieldStyles = {
    marginBottom: '20px',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& fieldset': {
        borderColor: isDarkMode ? '#6EACDA' : undefined,
      },
      '&:hover fieldset': {
        borderColor: isDarkMode ? '#6EACDA' : undefined,
      },
      '&.Mui-focused fieldset': {
        borderColor: isDarkMode ? '#6EACDA' : undefined,
        color: isDarkMode ? '#6EACDA' : undefined,
      },
    },
    '& .MuiInputLabel-root': {
      color: isDarkMode ? '#6EACDA' : undefined,
      '& .MuiFormLabel-asterisk': {
        color: isDarkMode ? '#FF6E6E' : '#D32F2F', // Red shades that match dark and light backgrounds
      },
    },
    '& .MuiInputLabel-shrink': {
      color: isDarkMode ? '#6EACDA' : undefined,
      '& .MuiFormLabel-asterisk': {
        color: isDarkMode ? '#FF6E6E' : '#D32F2F', // Red shades that match dark and light backgrounds
      },
    },
  };
  

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        sx={{
          borderRadius: '25px',
          boxShadow: 'none', // Remove default box-shadow
          '& .MuiPaper-root': {
            borderRadius: '25px', // Ensure the dialog paper has the same border-radius
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Custom shadow
          },
        }}
      >
        <DialogTitle
          align="center"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            borderRadius: '25px 25px 0 0',
            padding: '20px',
            position: 'relative',
          }}
        >
          Contact Me
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleclosedialog}
            sx={{
              position: 'absolute',
              right: 30,
              top: 15,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ padding: '30px', backgroundColor: theme.palette.background.default }}>
          <Grid container spacing={3} alignItems="stretch">
            {/* Left Side: Info Section */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', marginTop: '30px' }}>
              <Paper
                elevation={4}
                sx={{
                  padding: 4,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '25px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Box display="flex" alignItems="center" mb={4}>
                  <IconButton
                    disabled
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      marginRight: 2,
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <PhoneIcon color="primary" />
                  </IconButton>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary}>
                      Whatsapp Number
                    </Typography>
                    <Typography variant="body2" color={theme.palette.text.secondary}>
                      +91 9653145958
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={4}>
                  <IconButton
                    disabled
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      marginRight: 2,
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <ContactMailIcon color="primary" />
                  </IconButton>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary}>
                      EMAIL ID
                    </Typography>
                    <Typography variant="body2" color={theme.palette.text.secondary}>
                      shivam.prgoswami@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <IconButton
                    disabled
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      marginRight: 2,
                      borderRadius: '12px',
                      padding: '10px',
                    }}
                  >
                    <LocationOnIcon color="primary" />
                  </IconButton>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color={theme.palette.text.primary}>
                      LOCATION
                    </Typography>
                    <Typography variant="body2" color={theme.palette.text.secondary}>
                      Mumbai, Maharastra
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Right Side: Form Section */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', marginTop: '30px' }}>
              <Paper
                elevation={4}
                sx={{
                  padding: 4,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '25px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <TextField
                required
                  autoFocus
                  margin="dense"
                  label="Enter your Name"
                  type="text"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  sx={textFieldStyles}
                />
                <TextField
                required
                  margin="dense"
                  label="Enter a valid email address"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  sx={textFieldStyles}
                />
                <TextField
                required
                  margin="dense"
                  label="Enter your message"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="outlined"
                  sx={textFieldStyles}
                />
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: theme.palette.background.default,
            justifyContent: 'center',
            borderRadius: '0 0 25px 25px',
            padding: '20px',
          }}
        >
          <Button
            onClick={handleClose}
            color="secondary"
            variant="outlined"
            sx={{
              padding: '10px 20px',
              borderRadius: '24px',
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            sx={{
              padding: '10px 20px',
              borderRadius: '24px',
              color: theme.palette.text.primary,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:disabled': {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.text.primary,
              },
            }}
            disabled={loading} // Disable button while loading
          >
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  color: theme.palette.text.primary,
                  marginRight: '10px',
                }}
              />
            )}
            Submit
          </Button>

        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={() => setSuccessDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3, p: 2 }
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setSuccessDialogOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
              Your message has been sent successfully!
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Error Dialog */}
      <Dialog
        open={errorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3, p: 2 }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}>
            <ErrorIcon sx={{ mr: 1 }} /> Error
          </Typography>
          <IconButton onClick={() => setErrorDialogOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Typography variant="body1">{errorMessage}</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end', p: 2 }}>
          <Button onClick={() => setErrorDialogOpen(false)} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactMe;
