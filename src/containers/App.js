import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Home from './Home';
import Layout from '../components/Layout';

export const App = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    )
}

export default App;