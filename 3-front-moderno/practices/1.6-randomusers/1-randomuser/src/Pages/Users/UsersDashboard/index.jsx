import { Link, Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div className='col-12'>
            <h1 className='mb-3'>Users Dashboard</h1>
            <div className='col-12 div col-md-3 mb-5'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link
                            className='text-decoration-none link-primary link-offset-2'
                            to='create'
                        >
                            Create User
                        </Link>
                    </li>
                    <li className='list-group-item '>
                        <Link
                            className='text-decoration-none link-primary link-offset-2'
                            to='list-all'
                        >
                            List All Users
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='col-12 col-md-9'>
                <Outlet />
            </div>
        </div>
    );
};

export default Users;
