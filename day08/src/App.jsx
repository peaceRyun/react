import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styled/reset';
import Layout from './common/Layout';
import { About, Home, Movie, Post, Profile, Todos, User } from './pages';
import { UserDetail } from './components';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/movie' element={<Movie />} />
                        <Route path='/todos' element={<Todos />} />
                        <Route path='/post' element={<Post />} />
                        <Route path='/user'>
                            <Route index element={<User />} />
                            <Route path=':userID' element={<UserDetail />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
