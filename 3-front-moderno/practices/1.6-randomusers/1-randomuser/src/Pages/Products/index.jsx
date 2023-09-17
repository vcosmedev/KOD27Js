import { Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <div className='col-12'>
                <h1>Products Dashboard</h1>
            </div>
            <Outlet />
        </>
    );
};

export default Products;
