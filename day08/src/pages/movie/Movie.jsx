import { MovieList } from '../../components';
import { MovieCon } from './style';

const Movie = () => {
    return (
        <MovieCon>
            <div className='inner'>
                <h2> Movie Page입니다.</h2>
                <MovieList />
            </div>
        </MovieCon>
    );
};

export default Movie;
