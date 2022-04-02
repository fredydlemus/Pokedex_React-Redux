import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Home from './Home';
import Layout from '../components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetail from './PokemonDetail/index';

export const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
}

export default App;