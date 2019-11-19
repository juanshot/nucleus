import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';
import { INITIAL_USERS as topFive } from './../utils/constants';

class UsersList extends Component {
  state = {
    topFive
  }
  redirectToPerson = (userName) => {
    console.log(JSON.stringify(this.props))
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
              <Link
                to={`person/${user}`}
                key={index}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ margin: '5px', background: '#2196f3' }}
                  to={`person/${user}`}
                >
                    { user }
                </Button>
              </Link>
            ))}
          </div>
      </React.Fragment>
    )
  }
}

export default UsersList