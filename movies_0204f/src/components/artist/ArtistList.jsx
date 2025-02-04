import { useSelector } from 'react-redux';
import ArtistItem from './ArtistItem';
import { CardListBox } from './style';

const ArtistList = () => {
    const { data } = useSelector((state) => state.cardR);
    return (
        <CardListBox>
            {data.map((item) => (
                <ArtistItem key={item.id} item={item} />
            ))}
        </CardListBox>
    );
};

export default ArtistList;
