import { useEffect } from 'react';
import { CardWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import ArtistList from '../../components/artist/ArtistList';
import { cardActions } from '../../store/modules/cardSlice';
import Spinner from '../../components/spinner/Spinner';

const Artist = () => {
    const { loading, page } = useSelector((state) => state.cardR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardActions.startPage());
    }, []);

    useEffect(() => {
        dispatch(cardActions.setLoading(true));
        const timer = setTimeout(() => {
            dispatch(cardActions.loadData());
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [page]);

    const addScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (!loading) {
                dispatch(cardActions.setPage(page + 1));
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', addScroll);
        return () => {
            window.removeEventListener('scroll', addScroll);
        };
    }, [loading, page]);

    return (
        <CardWrap>
            <div className="inner">
                <h2>Card 페이지 입니다</h2>
                <ArtistList />
                {loading && <Spinner />}
                {/* {loading ? <Spinner />:null} */}
            </div>
        </CardWrap>
    );
};

export default Artist;
