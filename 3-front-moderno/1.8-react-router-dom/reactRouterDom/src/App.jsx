import './App.css';
import Page1 from './pages/Page1/index';

import { createBrowserProvider, RouterProvider } from 'react-router-dom';

import { userEffect, useState } from 'react';

function App() {
    const router = createBrowserProvider([
        {
            path: '/',
            element: <Page1 />,
        },
        {
            path: '/detail',
            element: <h2>Detail view</h2>,
        },
    ]);
    return <></>;
}

export default App;
