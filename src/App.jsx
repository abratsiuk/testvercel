import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header';
import { Main } from './pages/Main';
import { Footer } from './layout/Footer';
import { Movie } from './pages/Movie';
import { Actor } from './pages/Actor';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <Router basename='/01.react.movie'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Main />}
                        />
                        <Route
                            path='/movie/:id'
                            element={<Movie />}
                        />
                        />
                        <Route
                            path='/actor/:actorName'
                            element={<Actor />}
                        />
                        <Route
                            path='*'
                            element={<NotFound />}
                        />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
