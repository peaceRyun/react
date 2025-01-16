import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './styled/reset';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes></Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
