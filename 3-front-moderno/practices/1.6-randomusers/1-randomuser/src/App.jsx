import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users/UsersDashboard';
import CreateUser from './Pages/Users/CreateUser';
import ListAllUsers from './Pages/Users/ListAllUsers';
import Products from './Pages/Products/ProductsDashboard';
import ListAllProducts from './Pages/Products/ListAllProducts';

function App() {
    return (
        <>
            <nav class='navbar navbar-expand-lg bg-body-tertiary'>
                <div class='container-fluid'>
                    <Link className='text-decoration-none fw-bold me-3' to='/'>
                        Home
                    </Link>
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
                                <Link
                                    className='text-decoration-none me-3'
                                    to='users/list-all'
                                >
                                    Users
                                </Link>
                            </li>
                            <li class='nav-item'>
                                <Link
                                    className='text-decoration-none'
                                    to='products'
                                >
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className='row'>
                    <Routes>
                        <Route path='/' element={<Home />} />
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

                        <Route path='/products' element={<Products />}>
                            <Route
                                path='list-all'
                                element={<ListAllProducts />}
                            ></Route>
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
