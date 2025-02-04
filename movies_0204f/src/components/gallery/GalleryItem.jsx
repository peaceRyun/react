import { GalleryItemContainer } from './style';

const GalleryItem = ({ item }) => {
    const { title, poster_path } = item;

    return (
        <GalleryItemContainer>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <h3> {title}</h3>
            <ul>
                <li>조회수 : </li>
                <li>다운로드 : </li>
                <li>좋아요 : </li>
            </ul>
            <p>
                <span># xx</span>
            </p>
        </GalleryItemContainer>
    );
};

export default GalleryItem;
