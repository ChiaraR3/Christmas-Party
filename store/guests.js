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
    remove(state, guestToRemove) {
       const guestIndex = state.list.findIndex((guest)=>guest.id === guestToRemove.id);
       if(guestIndex>=0){
      state.list.splice(guestIndex, 1)
       }
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }