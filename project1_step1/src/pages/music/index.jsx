import { useEffect } from 'react';
import { MelonForm, MelonList, MelonModal } from '../../components';
import { MelonContainer } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getMusic } from '../../store/modules/getThunk';
import { musicActions } from '../../store/modules/musicSlice';

const Music = () => {
    const { nowDate, isOpen } = useSelector((state) => state.musicR);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMusic());
        dispatch(musicActions.onDate());
    }, []);
    return (
        <MelonContainer>
            <div className='inner'>
                <h3> {nowDate} </h3>
                <MelonForm />
                <MelonList />
                {isOpen && <MelonModal />}
            </div>
        </MelonContainer>
    );
};

export default Music;
