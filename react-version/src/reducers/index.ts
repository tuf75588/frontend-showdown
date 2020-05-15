export const initalState = {
  error: null,
  response: null,
  status: null,
};

function appReducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        status: 'LOADING',
      };
    case 'SUCCESS':
      return { ...state, status: 'SUCCESS', response: action.payload };
    case 'ERROR':
      return { ...state, status: 'ERROR', error: action.message };
    default:
      throw new Error(`Unrecognized action type of ${action.type}`);
  }
}

export default appReducer;
