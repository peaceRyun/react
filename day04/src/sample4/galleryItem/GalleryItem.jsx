import { GalleryItemContainer } from './style';

const GalleryItem = ({ item }) => {
    const { user, views, downloads, likes, tags, webformatURL } = item;
    const hash = tags.split(',');

    return (
        <GalleryItemContainer>
            <img src={webformatURL} alt='' />
            <h3>{user}</h3>
            <ul>
                <li>조회수 : {views}</li>
                <li>다운로드 : {downloads}</li>
                <li>좋아요 : {likes}</li>
            </ul>
            <p>
                {hash.map((tag, index) => (
                    <span key={index}># {tag.trim()}</span>
                ))}
            </p>
        </GalleryItemContainer>
    );
};

export default GalleryItem;
