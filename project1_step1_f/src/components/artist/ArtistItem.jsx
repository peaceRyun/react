import { CardBox } from './style';

const ArtistItem = ({ item }) => {
    const { id, imgurl, title } = item;
    return (
        <CardBox>
            <div className="pic">
                <img src={imgurl} alt="" />
            </div>
            <div className="text-info">
                <h2>
                    {id} / {title}
                </h2>
            </div>
        </CardBox>
    );
};

export default ArtistItem;
