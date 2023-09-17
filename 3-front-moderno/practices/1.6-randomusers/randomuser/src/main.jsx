import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// // RouterProvider: componente orden superior donde se irán inyectando todas las páginas y compontentes
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// // Función que se encarga de determinar los diferentes paths y qué se va a inyectar en cada path
// // ¿Qué hace 'router'?
// // Dentro de 'router' se tiene un array de objetos representando cada objeto una configuración
// // Hay que designar en estos objetos el path que se quiere gestionar y el componente que se quiere inyectar
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//     },
//     {
//         path: '/detail',
//         element: <hi>Detail view</hi>,
//     },
//     {
//         path: '/products',
//         element: <hi>Products view</hi>,
//     },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//         {/* Recibe prop llamadra 'router' y tiene como valor router que se tiene en la línea 9 */}
//     </React.StrictMode>
// );
