import { BrowserRouter, Routes, Route } from 'react-router';
import GlobalStyle from './styled/reset';
import Main from './page5/Main';
import Layout from './page6/Layout';
import Home from './page6/Home';
import About from './page6/About';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' index element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
