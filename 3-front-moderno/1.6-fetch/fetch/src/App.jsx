import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [entries, setEntries] = useState(null);
    const [update, setUpdate] = useState(false);
    const [entryData, setEntryData] = useState({});
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const getEntries = async () => {
            const response = await fetch(
                'https://javascript27kod-default-rtdb.firebaseio.com/playlist.json'
            );
            const data = await response.json();
            setEntries(data);
        };
        getEntries();
    }, [update]);

    // Update Handler
    const updateHandler = () => setUpdate(!update);

    // Input Handler
    const inputHandler = (event) => {
        setEntryData({ ...entryData, [event.target.name]: event.target.value });
    };

    // Save entry
    const saveEntry = async () => {
        const response = await fetch(
            'https://javascript27kod-default-rtdb.firebaseio.com/playlist.json',
            {
                method: 'POST',
                body: JSON.stringify(entryData),
            }
        );
        const data = await response.json();
        setUpdate(!update);
    };

    // Delete Handler
    const deleteHandler = async (key) => {
        const response = await fetch(
            `https://javascript27kod-default-rtdb.firebaseio.com/playlist/${key}.json`,
            {
                method: 'DELETE',
            }
        );
        const data = await response.json();
        setUpdate(!update);
    };

    const loginHandler = () => setIsLogged(!isLogged);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-end'>
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
                    {isLogged && (
                        <div className='col-12 col-md-6 col-lg-12'>
                            <h3>
                                Song registration
                                <button
                                    type='submit'
                                    className='btn btn-primary ms-3 mt-3 mb-3'
                                    onClick={saveEntry}
                                >
                                    Save
                                </button>
                            </h3>
                            <form>
                                <label
                                    htmlFor='exampleInputEmail1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='songName'
                                    aria-describedby='songName'
                                    placeholder='Song Title'
                                    name='name'
                                    onChange={inputHandler}
                                />
                                <label
                                    htmlFor='exampleInputEmail1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='songName'
                                    aria-describedby='songName'
                                    placeholder='Artist'
                                    name='artist'
                                    onChange={inputHandler}
                                />
                            </form>
                        </div>
                    )}
                    <div className='col-12 col-md-6 col-lg-12'>
                        <h3>
                            Songs List 🎵
                            <button
                                className='btn btn-primary mt-3 ms-3 mb-3'
                                onClick={updateHandler}
                            >
                                Update List
                            </button>
                        </h3>
                        <ul className='list-group'>
                            {/* Conditional rendering 'entries && ...' */}
                            {entries &&
                                Object.keys(entries).map((key) => (
                                    <li
                                        key={key}
                                        className='list-group-item d-flex justify-content-between'
                                    >
                                        {entries[key].name},{' '}
                                        {entries[key].artist}
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => deleteHandler(key)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

// https://console.firebase.google.com/u/0/project/javascript27g/database/javascript27g-default-rtdb/data/playlist

/* 
const [isLogged, setIsLogged] = useState(false);
// Apply conditional rendering (truthy, falsy) into jsx code to show or hide
*/
