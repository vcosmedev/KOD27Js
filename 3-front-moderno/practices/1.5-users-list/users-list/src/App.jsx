import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [user, setUser] = useState({});
    const [update, setUpdate] = useState(false);
    const [userData, setUserData] = useState({});
    const [isLogged, setIsLogged] = useState(false);

    // useEffect() getUsers
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(
                'https://javascript27kod-default-rtdb.firebaseio.com/users.json'
            );
            const data = await response.json();
            setUser(data);
        };
        getUsers();
    }, [update]);

    // update Handler
    const updateHandler = () => setUpdate(!update);

    // userData Handler
    const inputHanlder = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    // Save user
    const saveUser = async () => {
        const response = await fetch(
            'https://javascript27kod-default-rtdb.firebaseio.com/users.json',
            {
                method: 'POST',
                body: JSON.stringify(userData),
            }
        );
        const data = await response.json();
        console.log(data);
        setUpdate(!update);
    };

    // Login Hanlder
    const loginHandler = () => {
        if (!isLogged) {
            // const { id } = userData;
            // const token = id;
            const token = 'ID123098!$veintitres';
            localStorage.setItem('token', token);
            setIsLogged(!isLogged);
        } else if (isLogged) {
            localStorage.removeItem('token');
            setIsLogged(!isLogged);
        }
    };

    // useEffect() tokenExists
    useEffect(() => {
        const token = localStorage.getItem('token');
        token ? setIsLogged(true) : setIsLogged(false);
    }, []);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-end mt-3'>
                            <button
                                className='btn btn-success'
                                onClick={loginHandler}
                            >
                                {isLogged ? 'Logout' : 'Log in'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex'>
                        <div className='col-12 col-md-3 pb-3 mt-3'>
                            <h3 className='m-0'>Register form</h3>
                            <form>
                                <div className=''>
                                    <label
                                        htmlFor='exampleInputEmail1'
                                        className='form-label'
                                    ></label>
                                    <input
                                        type='text'
                                        className='form-control mt-1'
                                        id='userName'
                                        aria-describedby='userName'
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
                                        id='userEmail'
                                        placeholder='Email'
                                        name='email'
                                        onChange={inputHanlder}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='btn btn-primary mb-3'
                                    onClick={saveUser}
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                        {isLogged && (
                            <div className='d-flex justify-content-between col-12 col-md-10 ms-5'>
                                <div className='pb-3 mt-3'>
                                    <h3>Users list</h3>
                                    <ul className='list-group'>
                                        {user &&
                                            Object.keys(user).map((key) => (
                                                <li
                                                    key={key}
                                                    className='list-group-item mt-3'
                                                >
                                                    {user[key].name},{' '}
                                                    {user[key].email}
                                                    <button className='btn btn-primary ms-3'>
                                                        ★
                                                    </button>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className='col-12 col-md-7 pb-3 mt-3'>
                                    <h3>Friends</h3>
                                    <ul className='list-group'>
                                        {/* {user &&
                                Object.keys(user).map((key) => (
                                    <li
                                        key={key}
                                        className='list-group-item mt-3'
                                    >
                                        {user[key].name}, {user[key].email}
                                    </li>
                                ))} */}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
