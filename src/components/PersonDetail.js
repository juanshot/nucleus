import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  return props.person && (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.person['avatar_url'] || 'https://cdn.vuetifyjs.com/images/john.jpg'} />
        </ListItemAvatar>
        <ListItemText
          primary={
            props.person.name || 'No Name'
          }
          secondary={
            props.person.location || 'No Location'
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}