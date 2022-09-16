import './Addmovies.css';
import React,{useRef} from 'react';

const Addmovies=(props)=>{
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');
  
    function submitHandler(event) {
      event.preventDefault();
      const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };
  
      props.onAddMovie(movie);
    }
    return(
        <form className='control' onSubmit={submitHandler}>
      <div >
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div><br/>
      <div>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='4' id='opening-text' ref={openingTextRef}></textarea>
      </div><br/>
      <div>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} /><br/>
      </div><br/>
      <button >Add Movie</button>
    </form>
    )
};

export default Addmovies;