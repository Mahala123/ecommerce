
import Display from "./Display";
const Movieslist=(props)=>{
    console.log(props);

    return(
<ul>{props.movies.map((moviess)=>(
            <Display 
            id={moviess.id}
            title={moviess.title}
            releaseDate={moviess.releaseDate}
            openingdate={moviess.openingText}
            onDelete={props.onDelete.bind(null, moviess.id)}/>

       ) )}</ul>
        
    )
};

export default Movieslist;