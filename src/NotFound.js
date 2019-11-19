import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const userStyles =  makeStyles({
  card: {
    margin: '50px',
    background: '#ccc'
  }
});

export default function NotFound() {
  const classes = userStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>
            404 - NOT FOUND
        </Typography>
      </CardContent>
    </Card>
  );
}