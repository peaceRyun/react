import './style.scss';
import dataList from '../assets/api/posterData';
import MovieItem from './MovieItem';
import { useState } from 'react';

const Movie = () => {
    const [data, setData] = useState(dataList);

    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div className='wrap'>
            {data.map((item) => (
                <MovieItem key={item.id} item={item} onDel={onDel} />
            ))}
        </div>
    );
};

export default Movie;
