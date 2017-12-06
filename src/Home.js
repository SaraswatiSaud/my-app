import React, { Component } from 'react';
// use <MuiThemeProvider /> component in order to insert a theme in application.
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Button from 'material-ui/Button';

import App from './App'

const menuButton = {
    marginLeft: -12,
    marginRight: 20,
  }

const flex = {
  flex: 1,
}

function Home(props) {
  const { classes } = props;

  return (
    <div>
      {/* <AppBar position='static' color='default'>
        <Typography type='title'>This is Home page</Typography>
        <Button>Button</Button>
      </AppBar> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton style={menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" style={flex}>
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      <App />
    </div>

  );
}

export default Home;
