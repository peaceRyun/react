const GalleryBig = ({ current }) => {
    const { id, imgurl, title } = current;

    return (
        <div className='bigimg'>
            <h2>{title}</h2>
            <img src={imgurl} alt={title} />
        </div>
    );
};

export default GalleryBig;
