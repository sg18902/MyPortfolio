import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 3, backgroundColor: 'background.paper' }}>
          <Typography variant="h5">Welcome to My Portfolio</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            This is a brief introduction to my work and projects. Feel free to explore and get in touch!
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 3, backgroundColor: 'background.paper' }}>
          <Typography variant="h5">Latest Projects</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            - Project 1: A cool project description.
            <br />
            - Project 2: Another project description.
            <br />
            - Project 3: Yet another project description.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
