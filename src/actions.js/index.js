export const SELECT_TOP = 'SELECT_TOP';
export const SELECT_VIEWS = 'SELECT_VIEWS';

export const selectTop = profiles => ({
  type: SELECT_TOP,
  payload: profiles
});

export const selectViews = profiles => ({
  type: SELECT_VIEWS,
  payload: profiles
});
