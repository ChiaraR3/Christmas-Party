export const state = () => ({
    list: [ {
        id:1,
        name: 'Frank',
        gift: 'bottle of wine',
        confirmed: 'No',
      },
      {
        id:2,
        name: 'Adrian',
        gift: 'Dixit',
        confirmed: 'Yes',
      },
      {
        id:3,
        name: 'Paulette',
        gift: 'photo book',
        confirmed:'No',
      },
      {
        id:4,
        name: 'Rafael',
        gift: 'Call of duty',
        confirmed: 'Yes',
      },]
  })
  
  export const mutations = {
    add(state, guest) {
      state.list.push(guest)
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }