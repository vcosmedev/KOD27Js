import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [usersList, setUsersList] = useState([]);
    // Get info from db
    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(
                'https://randomuser.me/api/?inc=name,picture,login&results=20'
            );
            const data = await response.json();
            // Assign data -> state
            setUsersList(data.results);
        };
        getUsers();
    }, []);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Users List</h2>
                        <ul className='list-group'>
                            {usersList.map((user) => {
                                const { name, login, picture } = user;
                                return (
                                    <li
                                        key={login.uuid}
                                        className='list-group-item d-flex justify-content-between align-items-center'
                                    >
                                        <div
                                            style={{
                                                width: '55px',
                                                height: '55px',
                                            }}
                                        >
                                            <img
                                                src={picture.thumbnail}
                                                alt=''
                                                className='avatar rounded-circle img-fluid'
                                            />
                                        </div>
                                        <span className='fs-2'>
                                            {name.title}. {name.first}{' '}
                                            {name.last}
                                        </span>
                                        <button className='btn btn-primary'>
                                            Detail view
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
