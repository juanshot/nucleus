import React, { Component } from 'react'
import axios from 'axios'

import PersonDetail from './PersonDetail'

class Person extends Component {
  state = {
    userInfo: null
  }
  async componentDidMount () {
    const userName = this.props.match.params.name || 'juanshot'
    try {
      const { data } = await axios.get(`https://api.github.com/users/${userName}`);
      this.setState((state) => ({
        ...state,
        userInfo: data
      }))
    } catch (err) {

    }
  }

  render () {
    return (
      <div>
        <PersonDetail
          person={this.state.userInfo}
        />
      </div>
    )
  }
}

export default Person;