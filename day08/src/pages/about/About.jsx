import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const AboutCon = styled.div`
    h3 {
        font-size: 30px;
        margin-bottom: 20px;
    }
    button {
        width: 150px;
        height: 50px;
        cursor: pointer;
    }
`;

const About = () => {
    return (
        <AboutCon>
            <div className="inner">
                <h2> About Page입니다.</h2>

                <h3>text</h3>
                <button> 인사 </button>
            </div>
        </AboutCon>
    );
};

export default About;
