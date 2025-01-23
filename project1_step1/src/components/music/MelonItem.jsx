import { FcLikePlaceholder, FcLike, FcVideoCall, FcUp, FcDown, FcMinus } from 'react-icons/fc';
import { PiVideoCamera } from 'react-icons/pi';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { GoHeart } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { musicActions } from '../../store/modules/musicSlice';

const MelonItem = ({ item }) => {
    const dispatch = useDispatch();
    const { state, rank, title, album, singer, id, like, poster, done, isInter } = item;
    return (
        <tr>
            <td>{rank}</td>
            <td className='img'>
                <img src={poster} alt={title} width='60' />
                <p className='img'>
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>{album}</td>
            <td className='like'>
                <i onClick={() => dispatch(musicActions.onLike(id))}>{done ? <BiSolidLike /> : <BiLike />}</i>
                {like.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </td>
            <td>
                <i
                    onClick={() => {
                        dispatch(musicActions.onModal(id));
                    }}
                >
                    <PiVideoCamera />
                </i>
            </td>
            <td>
                {state === '상승' && <FcUp style={{ color: 'blue' }} />}
                {state === '하강' && <FcDown style={{ color: 'red' }} />}
                {state === '유지' && <FcMinus style={{ color: 'black' }} />}

                <span style={{ marginLeft: 10 }}>state</span>
            </td>
            <td className='like'>
                <span>
                    <i onClick={() => dispatch(musicActions.onInter(id))}>
                        {/* <FcLikePlaceholder /> */}
                        {isInter ? <FcLike /> : <GoHeart />}
                    </i>
                </span>
            </td>
        </tr>
    );
};

export default MelonItem;
