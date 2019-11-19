import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  backButton: {
    marginRight: theme.spacing(2),
    color: '#fff'
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: '#000',
    'text-align': 'center'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          { props.backBtn && (
            <Link
              to="/"
            >
              <IconButton
                edge="start"
                className={classes.backButton}
                color="inherit"
                aria-label="back"
                >
                  <BackIcon />
              </IconButton>
            </Link>
          ) }
          <Typography variant="h6" className={classes.title}>
           {props.currentPage}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}