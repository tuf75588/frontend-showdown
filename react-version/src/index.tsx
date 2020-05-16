import React, { useReducer, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fetchImages from './API/index';
import appReducer from './reducers/index';

type State = {
  searchValue: string;
  error: null | string;
  status: string | null;
  data: Array<{ image: string; author: string; title: string; id: string }>;
};

const initialState: State = {
  searchValue: '',
  error: null,
  status: null,
  data: [],
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    if (
      state.status === 'LOADING' &&
      state.searchValue.toLowerCase().trim().length > 2 &&
      state.searchValue.toLowerCase().trim().length < 20
    ) {
      fetchImages(state.searchValue).then((response) => {
        dispatch({ type: 'SUCCESS', payload: response });
      });

      if (state.data.length) {
        dispatch({ type: 'RESET' });
      }
    }
  }, [state]);
  const images = { ...state };
  return (
    <React.Fragment>
      <h1>Image Search</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          dispatch({ type: 'FETCHING', searchTerm: state.searchValue });
        }}
      >
        <label htmlFor="searchTerm">Search Term</label>
        <input
          className="u-full-width"
          type="text"
          id="searchTerm"
          name="searchTerm"
          value={state.searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'CHANGE', searchTerm: e.currentTarget.value });
          }}
        />
        <button type="submit">Search</button>
      </form>
      <section className="images">images will be here</section>
      {JSON.stringify(state, null, 2)}
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
