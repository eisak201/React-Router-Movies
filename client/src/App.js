import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div className='highlight'>
      <SavedList list={savedList} />
      
      <Route exact path='/'>
      < SearchBar />
      <MovieList />
      </Route>
      <Route path='/movies/:id'>
        <Movie />
     </Route>
    </div>
  );
};

export default App;
