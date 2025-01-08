const GalleryBig = ({ current, onOpen }) => {
    const { id, imgurl, title } = current;

    return (
        <div className='bigimg'>
            <h2>{title}</h2>
            <img src={imgurl} alt={title} onClick={onOpen} />
        </div>
    );
};

export default GalleryBig;
