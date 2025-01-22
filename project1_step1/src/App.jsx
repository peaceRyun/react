import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import { About, Artist, Customer, Gallery, Join, Login, Logout, Main, Music, Notice } from './pages';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/join' element={<Join />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/artist' element={<Artist />} />
                        <Route path='/gallery' element={<Gallery />} />
                        <Route path='/notice' element={<Notice />} />
                        <Route path='/customer' element={<Customer />} />
                    </Route>

                    <Route path='*' />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
