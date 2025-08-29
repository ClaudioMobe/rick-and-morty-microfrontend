import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer, Header, Layout, Logo, Main } from './styles/App.styles';

const CharactersApp = React.lazy(() => import('mf_characters/CharactersApp'));
const CharacterDetailApp = React.lazy(() => import('mf_character_detail/CharacterDetailApp'));

const App = () => {
    return (
        <Layout>
            <Header>
                <Logo src='/logo.svg' alt='Rick&Morty'/>
            </Header>
            <Main>
                <Suspense fallback={<p>Cargando…</p>}>
                    <Routes>
                        <Route path="/" element={<CharactersApp />} />
                        <Route path="/character/:id" element={<CharacterDetailApp />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </Main>
            <Footer>
                <p>Sitio creado utilizando microfrontends</p>
                <p>Coded by Claudio Mobe © 2025</p>
            </Footer>
        </Layout>
    );
}

export default App;