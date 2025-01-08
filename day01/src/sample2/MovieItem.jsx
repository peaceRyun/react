const MovieItem = ({ item, onDel }) => {
    const { id, imgurl, title, date, actor, director } = item;

    return (
        <article>
            <div className='left'>
                <img src={imgurl} alt='' />
            </div>
            <div className='right'>
                <h3>{title}</h3>
                <ul>
                    <li>출연진: {director}</li>
                    <li>감독: {actor}</li>
                    <li>개봉일: {date}</li>
                </ul>
                <button
                    onClick={() => {
                        onDel(id);
                    }}
                >
                    삭제
                </button>
            </div>
        </article>
    );
};

export default MovieItem;
