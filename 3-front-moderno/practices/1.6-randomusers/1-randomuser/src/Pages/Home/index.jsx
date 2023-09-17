import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-start'>
                        <button className='btn btn-primary me-5'>
                            <Link
                                className='text-decoration-none text-reset me-3'
                                to='users/list-all'
                            >
                                Users
                            </Link>
                        </button>
                        <button className='btn btn-primary'>
                            <Link
                                className='text-decoration-none text-reset me-3'
                                to='products'
                            >
                                Products
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
