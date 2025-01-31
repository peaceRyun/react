import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import { About, Artist, Customer, Gallery, Join, Login, Logout, Main, Music, Notice } from './pages';
import { CustomerAdd, CustomerDetail, CustomerEdit, NoticeDetail } from './components';

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
                        <Route path='/notice'>
                            <Route index element={<Notice />} />
                            <Route path=':noticeID' element={<NoticeDetail />} />
                        </Route>
                        <Route path='/customer'>
                            <Route index element={<Customer />} />
                            <Route path='customerAdd' element={<CustomerAdd />} />
                            <Route path='customerEdit' element={<CustomerEdit />} />
                            <Route path=':customerID' element={<CustomerDetail />} />
                        </Route>
                    </Route>

                    <Route path='*' />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
