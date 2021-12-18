export const state = () => ({
    list: [ {
        id:1,
        name: 'Frank',
        gift: 'bottle of wine',
        confirmed: 'no',
      },
      {
        id:2,
        name: 'Adrian',
        gift: 'Dixit',
        confirmed: 'yes',
      },
      {
        id:3,
        name: 'Paulette',
        gift: 'photo book',
        confirmed:'no',
      },
      {
        id:4,
        name: 'Rafael',
        gift: 'Call of duty',
        confirmed: 'yes',
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
    modified(state, guestToModify) {
        const guestIndex = state.list.findIndex((guest)=>guest.id === guestToModify.id);
        if(guestIndex>=0){
       state.list.splice(guestIndex, 1, JSON.parse(JSON.stringify(guestToModify)));
        }
     },
   
  }