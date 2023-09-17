import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <div className='col-12'>
                <h1 className='mb-3'>Products Dashboard</h1>
                <div className='col-12 div col-md-3 mb-5'>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <Link
                                className='text-decoration-none link-primary link-offset-2'
                                to='add-product'
                            >
                                Add Product
                            </Link>
                        </li>
                        <li className='list-group-item'>
                            <Link
                                className='text-decoration-none link-primary link-offset-2'
                                to='list-all'
                            >
                                List All Products
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-12'>
                <Outlet />
            </div>
        </>
    );
};

export default Products;
