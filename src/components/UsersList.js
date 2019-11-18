import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';

class UsersList extends Component {
  state = {
    topFive: [
      'GrahamCampbell',
      'fabpot',
      'weierophinney',
      'rkh',
      'josh'
    ]
  }
  render () {
    return (
      <React.Fragment>
          <AppBar
            currentPage="Home"
          />
          <div style={{padding: '20px'}}>
            <h2>Top 5 GitHub Users</h2>
            <p>Tab the user to see more information</p>
            {this.state.topFive.map((user, index) => (
              <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ margin: '5px', background: '#2196f3' }}
                  key={index}
                  href={`/person/${user}`}
              >
                  {user}
              </Button>
            ))}
          </div>
      </React.Fragment>
    )
  }
}

export default UsersList