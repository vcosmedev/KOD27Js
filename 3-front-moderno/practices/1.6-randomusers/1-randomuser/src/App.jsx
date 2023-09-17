import { Route, Routes, Link } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Users from './Pages/Users/UsersDashboard';
import CreateUser from './Pages/Users/CreateUser';
import ListAllUsers from './Pages/Users/ListAllUsers';
import Products from './Pages/Products/ProductsDashboard';
import AddProduct from './Pages/Products/AddProduct';
import ListAllProducts from './Pages/Products/ListAllProducts';

import { useState, useEffect } from 'react';

function App() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(
                'https://randomuser.me/api/?results=20'
            );
            const data = await response.json();
            setUsers(data.results);
        };
        getUsers();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(
                'https://fakestoreapi.com/products?limit=20'
            );
            const data = await response.json();
            setProducts(data);
        };
        getProducts();
    }, []);

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
                                element={<ListAllUsers allUsers={users} />}
                            ></Route>
                        </Route>

                        <Route path='/products' element={<Products />}>
                            <Route
                                path='add-product'
                                element={<AddProduct />}
                            ></Route>
                            <Route
                                path='list-all'
                                element={
                                    <ListAllProducts allProducts={products} />
                                }
                            ></Route>
                        </Route>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
