import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/reset';

import Main from './page5/Main';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                {/* 화면에 보이는 영역 */}
                <Routes></Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
