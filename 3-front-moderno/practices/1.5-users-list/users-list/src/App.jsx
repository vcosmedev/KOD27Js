import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
    const [users, setUser] = useState({});
    const [update, setUpdate] = useState(false);
    const [userData, setUserData] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const [friendData, setFriendData] = useState(null);
    const [favFriends, setFavFriends] = useState([]);

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

    // Save users
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

    // Delete Handler
    const deleteHandler = async (key) => {
        const response = await fetch(
            `https://javascript27kod-default-rtdb.firebaseio.com/users/${key}.json`,
            {
                method: 'DELETE',
            }
        );
        const data = await response.json();
        setUpdate(!update);
    };

    // Login Handler
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

    // addToFav Handler
    const addToFav = async (key) => {
        const response = await fetch(
            `https://javascript27kod-default-rtdb.firebaseio.com/vic/favs.json`
            // `https://javascript27kod-default-rtdb.firebaseio.com/users/favs.json`
        );
        const favs = await response.json();
        console.log(favs);
        const updatedFavs = favs ? [...favs, key] : [key];
        console.log(updatedFavs);

        const update = await fetch(
            `https://javascript27kod-default-rtdb.firebaseio.com/vic/favs.json`,
            // `https://javascript27kod-default-rtdb.firebaseio.com/users/favs.json`,
            {
                method: 'PUT',
                body: JSON.stringify(updatedFavs),
            }
        );
        const result = await update.json();
        console.log(result);
    };

    // useEffect to show list friends
    useEffect(() => {
        const getFriendsData = async (friendKey) => {
            const response = await fetch(
                `https://javascript27kod-default-rtdb.firebaseio.com/${friendKey}/.json`
            );
            const data = await response.json();
            console.log(data);
            const userFriends = users && data.favs.map((user) => users[user]);
            console.log(userFriends);

            setFriendData(data);
            setFavFriends(userFriends);
        };
        getFriendsData('vic');
    }, [users]);

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
                        <div className='d-flex justify-content-end mt-3 me-4'>
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
                        <div className='col-4 col-md-5 pb-3 mt-3'>
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
                            <div className='justify-content-between col-8 col-md-6 ms-5'>
                                <div className='pb-3 mt-3'>
                                    <h3>Users list</h3>
                                    <ul className='list-group'>
                                        {users &&
                                            Object.keys(users).map((key) => (
                                                <li
                                                    key={key}
                                                    className='list-group-item d-flex justify-content-between mt-3'
                                                >
                                                    {users[key].name},{' '}
                                                    {users[key].email}
                                                    <div className='text-center'>
                                                        <button
                                                            className='btn btn-primary ms-1'
                                                            onClick={() =>
                                                                addToFav(key)
                                                            }
                                                        >
                                                            ★
                                                        </button>
                                                        <button
                                                            className='btn btn-primary ms-1'
                                                            onClick={() =>
                                                                deleteHandler(
                                                                    key
                                                                )
                                                            }
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                width='16'
                                                                height='16'
                                                                fill='currentColor'
                                                                className='bi bi-trash'
                                                                viewBox='0 0 16 16'
                                                            >
                                                                <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z' />
                                                                <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z' />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className='col-12 col-md-7 pb-3 mt-3'>
                                    <h3>Friends</h3>
                                    <ul className='list-group'>
                                        {favFriends &&
                                            favFriends.map((friend) => (
                                                <li className='list-group-item mt-3'>
                                                    {friend.name} {friend.email}
                                                </li>
                                            ))}
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
