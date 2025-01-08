const GalleryItem = ({ item, onView }) => {
    const { id, thum, title, isClass } = item;

    return (
        <li className={isClass ? 'on' : ''} onClick={() => onView(id)}>
            <img src={thum} alt={title} />
        </li>
    );
};

export default GalleryItem;
