import { useDispatch, useSelector } from 'react-redux';
import { aboutActions } from '../../store/modules/aboutSlice';
import { AboutCon } from './style';

const About = () => {
    // 값처리
    const { text } = useSelector((state) => state.aboutR);
    const dispatch = useDispatch();

    return (
        <AboutCon>
            <div className='inner'>
                <h2> About Page입니다.</h2>

                <h3>{text}</h3>
                <button onClick={() => dispatch(aboutActions.onView('반가워'))}> 인사 </button>
            </div>
        </AboutCon>
    );
};

export default About;
