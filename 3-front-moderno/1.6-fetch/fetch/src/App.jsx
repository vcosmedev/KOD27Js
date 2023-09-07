import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [entries, setEntries] = useState({});
    const [update, setUpdate] = useState(false);
    const [entryData, setEntryData] = useState({});

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

    //Input Handler
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
        console.log(data);
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h3>Song registration</h3>
                        <button
                            type='submit'
                            className='btn btn-primary'
                            onClick={saveEntry}
                        >
                            Save
                        </button>
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

                            <button
                                className='btn btn-primary mt-3'
                                onClick={updateHandler}
                            >
                                Update List
                            </button>
                        </form>
                    </div>
                    <div className='col-12 col-md-6 mt-3'>
                        <h3>Songs List 🎵</h3>
                        <ul className='list-group'>
                            {Object.keys(entries).map((key) => (
                                <li key={key} className='list-group-item'>
                                    {entries[key].name} - {entries[key].artist}
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
