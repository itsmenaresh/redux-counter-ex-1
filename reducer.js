const initialState = {value : 10};

const reducer = ( state=initialState, action ) => {
  const returnState = { ...state };
  switch(action.type) {
    case "UP": {
    returnState.value += 1;
    break;
    } 
    case "DOWN": {
   returnState.value -= 1
    break;
    } 
  } 
  return returnState;
}

export default reducer;