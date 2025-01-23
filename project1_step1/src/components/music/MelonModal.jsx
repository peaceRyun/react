import { useDispatch, useSelector } from 'react-redux';
import { MelonModalBox } from './style';
import { SlClose } from 'react-icons/sl';
import { musicActions } from '../../store/modules/musicSlice';

const MelonModal = () => {
    const { currentMusic } = useSelector((state) => state.musicR);
    const { title, singer, key } = currentMusic;
    const dispatch = useDispatch();
    return (
        <MelonModalBox className='Modal'>
            <div className='bg'></div>
            <div className='popup'>
                <h2>곡: {title}</h2>
                <div>
                    <iframe
                        width='1268'
                        height='713'
                        src={`https://www.youtube.com/embed/${key}`}
                        frameBorder='0'
                    ></iframe>
                </div>
                <p>가수 : {singer}</p>
                <span>
                    <i
                        onClick={() => {
                            dispatch(musicActions.onModal());
                        }}
                    >
                        <SlClose />
                    </i>
                </span>
            </div>
        </MelonModalBox>
    );
};

export default MelonModal;
