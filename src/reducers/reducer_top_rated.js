export default function(state = null, action){
  switch(action.type){
    case 'SELECT_TOP':
      return action.payload.sort((a,b) => parseFloat(a.averageRating) - parseFloat(b.averageRating));
  }
  return state;
}

// homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
