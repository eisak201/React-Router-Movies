import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    console.log(movie)
   return savedList.includes(movie) ? '' : setSavedList( [...savedList, movie] );
    
  };
const removeFromSavedList = (movie) =>{
  const newList = savedList.filter ((el) =>{
    return el !== movie; 
  });
  setSavedList(newList);
};
  return (
    <div className='highlight'>
      <SavedList removeFromSavedList={removeFromSavedList}list={savedList} />
      
      <Route exact key path='/'>
      < SearchBar />
      <MovieList />
      </Route>
      <Route path='/movies/:id'>
        <Movie addToSavedList={addToSavedList}/>
     </Route>
    </div>
  );
};

export default App;
