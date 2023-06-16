import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Layouts/Main';

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}