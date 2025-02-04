import { useDispatch, useSelector } from 'react-redux';
import { SubVisualWrap } from './style';
import { useEffect } from 'react';
import { commonActions } from '../../store/modules/commonSlice';

const SubVisual = () => {
    const dispatch = useDispatch();
    const { obj } = useSelector((state) => state.commonR);
    useEffect(() => {
        if (!obj) {
            dispatch(commonActions.onLoad());
        }
    }, []);
    if (!obj) {
        return <div>Loading....</div>;
    }
    const { title, bgurl } = obj;
    return (
        // {/* Dom props 경고 $속성 값을 props으로 Dom에 전달 못한다 */}
        //$bgurl={bgurl}
        <SubVisualWrap $bgurl={bgurl}>
            <h2> {title} </h2>
        </SubVisualWrap>
    );
};

export default SubVisual;
