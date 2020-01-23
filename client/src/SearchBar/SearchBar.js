import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

 function SearchBar(props) {
     
    const [ title, setTitle ] = useState('');
    let history = useHistory();   

const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios
        .get(`http://localhost:5000/api/movies/search/${title}`)
        .then((res) => history.push(`/movies/${res.data.id}`))
        .catch((err) =>console.log(err));
        
    };

return(
<form onSubmit ={(e)=> onSubmitHandler (e)} className='search-bar'>
        <input value={title} onChange = {(e)=> setTitle (e.target.value)} placeholder='movie title'/>
    <button type='submit' disabled={!title}>Search</button>
</form>
 );
}
export default SearchBar