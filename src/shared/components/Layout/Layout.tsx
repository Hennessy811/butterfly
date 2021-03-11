import { AppBar, Toolbar, Typography, Button, Container, Box } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Layout: FC = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Link to="/">
              <Typography variant="h6">Butterfly</Typography>
            </Link>
            <Link to="/sign-in">
              <Button color="default">Login</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Box py={4}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
