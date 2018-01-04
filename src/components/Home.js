import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import red from 'material-ui/colors/red';
import PropTypes from 'prop-types';

import App from './App'

const styles = theme => ({
  palette: {
    width: '100%',
    primary: 'red'
  },
  flex: {
    flex: 1,
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Home
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      <App />
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
