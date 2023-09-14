import { useState } from 'react';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});

    // userData Handler
    const inputHanlder = (event) => {
        setUserData({ ...user, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 pb-3 mt-3'>
                        <h3 className='m-0'>Login form</h3>
                        <form>
                            <div className=''>
                                <label
                                    htmlFor='exampleInputEmail1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    aria-describedby='emailHelp'
                                    placeholder='Name'
                                    name='name'
                                    onChange={inputHanlder}
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputPassword1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Email'
                                    name='email'
                                    onChange={inputHanlder}
                                />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary mb-3 '
                            >
                                Save
                            </button>
                        </form>
                    </div>
                    <div className='col-12 col-md-4 pb-3 mt-3'>
                        <h3>Users list</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
