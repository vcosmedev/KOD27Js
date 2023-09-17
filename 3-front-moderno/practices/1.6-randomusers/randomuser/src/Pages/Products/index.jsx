import { Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <div className='col-12'>
                <h1>Users Dashboard</h1>
                <div className='col-12 div col-md-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>Create User</li>
                        <li className='list-group-item'>List All Users</li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Products;
