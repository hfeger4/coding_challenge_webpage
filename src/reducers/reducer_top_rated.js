const TopRatedReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case 'SELECT_TOP':
      const profiles = action.profiles.sort((a, b) => parseFloat(a.averageRating) - parseFloat(b.averageRating));
      // const profiles = action.profiles.reverse();
      return Object.assign({},state,profiles);
    default:
      return state;
  }
};

export default TopRatedReducer;

// homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
