import { observable } from 'mobx'

class Store {
  users = observable([
    { id: 1, name: 'Takkar' },
    { id: 2, name: 'Faiyaz' },
    { id: 3, name: 'Leo' },
    { id: 4, name: 'Another random name' },
  ])

  addUser = user =>
    this.users.unshift(user)

  deleteUser = id =>
    this.users.filter(u => u.id != id)

}

const store = new Store
window.store = store

export default store
