import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';
import { MovieCon } from './style';

const MovieList = () => {
    const { movies } = useSelector((state) => state.movieR);
    return (
        <MovieCon>
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </MovieCon>
    );
};

export default MovieList;
