function appReducer(state: any, action: any) {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        status: 'LOADING',
      };
    case 'CHANGE':
      return {
        ...state,
        searchValue: action.searchTerm,
      };
    case 'SUCCESS':
      return {
        ...state,
        status: 'SUCCESS',
        data: action.payload,
        searchValue: '',
      };
    case 'RESET':
      return {
        ...state,
        error: null,
        data: [],
        status: null,
      };
    case 'ERROR':
      return { ...state, status: 'ERROR', error: action.message };
    default:
      throw new Error(`Unrecognized action type of ${action.type}`);
  }
}

export default appReducer;
