import './App.css';
import { useEffect, useState } from 'react';
import UsersListPage from './Pages/Users/UsersDashboard';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import Users from './Pages/Users/UsersDashboard';
import CreateUser from './Pages/Users/CreateUser';
import ListAllUsers from './Pages/Users/ListAllUsers';
// Links

function App() {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid'>
                    <a class='navbar-brand' href='#'>
                        Navbar
                    </a>
                    <button
                        class='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div
                        class='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li class='nav-item'>
                                <a
                                    class='nav-link active'
                                    aria-current='page'
                                    href='#'
                                >
                                    Users
                                </a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#'>
                                    Products
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='row'>
                    <Routes>
                        <Route path='/users' element={<Users />}>
                            <Route
                                path='create'
                                element={<CreateUser />}
                            ></Route>
                            <Route
                                path='list-all'
                                element={<ListAllUsers />}
                            ></Route>
                        </Route>

                        <Route path='/products' element={<Products />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
