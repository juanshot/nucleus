import React, { Component } from 'react';
import axios from 'axios';

import AppBar from './AppBar';
import PersonDetail from './PersonDetail';

class Person extends Component {
  state = {
    userInfo: null
  }
  async componentDidMount () {
    const userName = this.props.match.params.userName || 'juanshot'
    try {
      const { data } = await axios.get(`https://api.github.com/users/${userName}`);
      this.setState((state) => ({
        ...state,
        userInfo: data
      }))
    } catch (err) {
      throw new Error(`There was an error`);
    }
  }

  render () {
    return (
      <div>
        <AppBar
          currentPage="Person"
          backBtn={true}
        />
        <PersonDetail
          person={this.state.userInfo}
        />
      </div>
    )
  }
}

export default Person;