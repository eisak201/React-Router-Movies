import React from 'react';
import{Link} from 'react-router-dom';
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <div onClick={() => props.removeFromSavedList(movie)} key={movie.id} className="saved-movie">{movie.title}</div>
    ))}
    <Link to='/'><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
