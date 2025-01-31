import { FcLikePlaceholder, FcLike, FcVideoCall, FcUp, FcDown, FcMinus } from 'react-icons/fc';
import { PiVideoCamera } from 'react-icons/pi';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { GoHeart } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { musicActions } from '../../store/modules/musicSlice';
// 슬라이스에 초기값에 isOpen:false
const MelonItem = ({ item }) => {
    const { title, singer, album, state, id, like, poster, done, isInter } = item;
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{id}</td>
            <td className="img">
                <img src={poster} alt="" width="60" />
                <p className="img">
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td> {album} </td>
            <td className="like">
                <i onClick={() => dispatch(musicActions.onLike(id))}>
                    {done ? <BiSolidLike /> : <BiLike />}
                </i>
                {like.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </td>
            <td>
                <i onClick={() => dispatch(musicActions.onModal(id))}>
                    <PiVideoCamera />
                </i>
            </td>
            <td>
                {state === '상승' && <FcUp />}
                {state === '하강' && <FcDown />}
                {state === '유지' && <FcMinus />}

                <span style={{ marginLeft: 10 }}>{state}</span>
            </td>
            <td className="like">
                <span>
                    <i onClick={() => dispatch(musicActions.onInter(id))}>
                        {/* <FcLikePlaceholder /> */}
                        {isInter ? <FcLike /> : <GoHeart />}
                        {/* <FcLike />  */}
                    </i>
                </span>
            </td>
        </tr>
    );
};

export default MelonItem;
