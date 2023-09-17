import React, { useEffect, useState } from 'react';
import productsApi from '../../../lib/productsApi';

const ListAllProducts = ({ allProducts }) => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const getAllProducts = async () => {
    //         const response = await productsApi.getAllProducts();
    //         const data = await response.json();
    //         setProducts(data);
    //     };
    //     getAllProducts();
    // }, []);
    return (
        <>
            <h2 className='mb-3'>List All Products</h2>
            <ul className='list-group'>
                {allProducts.map((product) => {
                    const { image, title, price } = product;
                    return (
                        <li className='list-group-item d-flex justify-content-start align-items-center gap-5'>
                            <div className='w-25'>
                                <img
                                    src={image}
                                    alt='Product Picture'
                                    className='rounded-circle img-fluid'
                                />
                            </div>
                            <p className='fw-bold'> {`${title} ${price}`} </p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ListAllProducts;
