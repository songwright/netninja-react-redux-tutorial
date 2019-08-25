const initState = {
  posts: [
    {id: '1', title: 'Squirtle Laid an Egg', body: 'Aliqua enim et excepteur nisi velit occaecat aliquip qui non.'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Aliqua enim et excepteur nisi velit occaecat aliquip qui non.'},
    {id: '3', title: 'A Helix Fossil was Found', body: 'Aliqua enim et excepteur nisi velit occaecat aliquip qui non.'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer

