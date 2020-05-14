import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fetchImages from './API/index';
type State = {
  status: string;
  images: Array<{ title: string; image: string; author: string }>;
  id: string;
  searchTerm: string;
};

const initialState: State = {
  status: 'idle',
  images: [],
  id: '',
  searchTerm: '',
};

function appReducer(state: any, action: any) {
  const { type } = action;
  if (type === 'click') {
    return {
      ...state,
      status: 'you clicked!',
    };
  } else if (type === 'change') {
    return {
      ...state,
      searchTerm: action.searchTerm,
    };
  } else if (type === 'submit') {
    return {
      ...state,
      status: 'loading',
      searchTerm: action.searchTerm,
    };
  } else if (type === 'resolved') {
    console.log('resolved!');
    return {
      ...state,
      status: 'idle',
    };
  }
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    if (state.searchTerm) {
      fetchImages(state.searchTerm).then((res) => {
        // dispatch our new state
      });
    }
    return function cleanup() {
      dispatch({ type: 'resolved' });
    };
  }, [state.status]);
  return (
    <React.Fragment>
      <h1>Image Search</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          dispatch({ type: 'submit', searchTerm: state.searchTerm });
        }}
      >
        <label htmlFor="searchTerm">Search Term</label>
        <input
          className="u-full-width"
          type="text"
          id="searchTerm"
          name="searchTerm"
          onChange={(e) =>
            dispatch({ type: 'change', searchTerm: e.currentTarget.value })
          }
        />
        <button type="submit">Search</button>
      </form>
      <img id="loadingImage" />
      <section className="images">images will be here</section>
      <p>{JSON.stringify(state, null, 2)}</p>
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
