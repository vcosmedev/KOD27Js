import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-3 mt-3'>
                        <h3 className='m-0'>Login form</h3>
                        <form>
                            <div className=''>
                                <label
                                    for='exampleInputEmail1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    aria-describedby='emailHelp'
                                    placeholder='Name'
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    for='exampleInputPassword1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                    placeholder='Email'
                                />
                            </div>

                            <button type='submit' className='btn btn-primary'>
                                Save
                            </button>
                        </form>
                    </div>
                    <h3>Users list</h3>
                </div>
            </div>
        </>
    );
}

export default App;
