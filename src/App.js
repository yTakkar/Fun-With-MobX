import React, { Component } from 'react'
import { observer } from 'mobx-react'
import _ from 'underscore'
import Moment from 'moment'

@observer
export default class App extends Component {

  addUser = e => {
    let { addUser } = this.props.store
    if (e.which === 13) {
      addUser({
        id: new Date(),
        name: e.target.value
      })
      e.target.value = ''
    }
  }

  deleteUser = id =>
    this.props.store.deleteUser(id)

  render() {
    let
      { users } = this.props.store,
      sortedUsers = _.sortBy(users, 'id').reverse(),
      map_users = sortedUsers.map(u =>
        <li
          key={u.id}
          onClick={() => this.deleteUser(u.id)}
        >{u.name} ({Moment(u.id).fromNow()})</li>
      )

    return (
      <div>
        <h1>USERS: </h1>
        <input
          placeholder='Add users'
          onKeyPress={this.addUser}
          autoFocus
          autoComplete='false'
        />
        <div>
          <ul>
            { map_users }
          </ul>
        </div>
      </div>
    )
  }
}
