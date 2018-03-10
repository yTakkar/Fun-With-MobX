import { observable } from 'mobx'

class Store {
  users = observable([
    { id: 'Sat Mar 10 2018 14:45:06 GMT+0530', name: 'Takkar' },
    { id: 'Sat Mar 10 2018 14:22:06 GMT+0530', name: 'Faiyaz' },
    { id: 'Sat Mar 10 2018 13:22:06 GMT+0530', name: 'Leo' },
    { id: 'Sat Mar 10 2018 12:22:06 GMT+0530', name: 'Another random name' },
  ])

  addUser = user =>
    this.users.unshift(user)

  deleteUser = id =>
    this.users.filter(u => u.id != id)

}

const store = new Store
window.store = store

export default store
