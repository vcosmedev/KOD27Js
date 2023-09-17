import './App.css';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersListPage from './Pages/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);
    // routes
    const router = createBrowserRouter([
        {
            path: '/',
            element: <UsersListPage usersList={usersList} />,
        },
        {
            path: '/detail',
            element: <hi>Detail view</hi>,
        },
        {
            path: '/products',
            element: <hi>Products view</hi>,
        },
    ]);

    // Get info from db
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(
                'https://randomuser.me/api/?inc=name,picture,login&results=20'
            );
            const data = await response.json();
            // Assign data -> state
            setUsersList(data.results);
        };
        getUsers();
    }, []);

    // const createUserList = () => {
    //     return <h1>Users List</h1>;
    // };

    // const createUserDetail = () => {
    //     return <h1>User Detail</h1>;
    // };
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Navbar
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='#'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Link
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    href='#'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    Dropdown
                                </a>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='#'>
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link disabled'
                                    aria-disabled='true'
                                >
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <form className='d-flex' role='search'>
                            <input
                                className='form-control me-2'
                                type='search'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <button
                                className='btn btn-outline-success'
                                type='submit'
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='container mt-3 mb-5'>
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
