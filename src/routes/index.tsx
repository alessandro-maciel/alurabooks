import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Layouts/Main';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

export default function AppRouter(){
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}