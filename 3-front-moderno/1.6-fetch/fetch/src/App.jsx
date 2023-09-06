import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
    const [entry, setEntries] = useState({});

    const inputHandler = () => {
        setEntries({ ...entry, [event.target.name]: event.target.value });
    };

    // useEffect(() => {
    //     const getEntries = () => {
    //         const response = fetch(
    //             'https://javascript27g-default-rtdb.firebaseio.com/playlist'
    //         );
    //         const data = response.json();
    //         setEntries(data);
    //     };
    //     getEntries();
    // }, []);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h3>Registra una canción</h3>
                        <form>
                            <div class='mb-3'>
                                <label
                                    for='exampleInputEmail1'
                                    class='form-label'
                                >
                                    Song Title
                                </label>
                                <input
                                    type='text'
                                    class='form-control'
                                    id='songName'
                                    aria-describedby='songName'
                                    name='name'
                                    onChange={inputHandler}
                                />
                            </div>
                            <div class='mb-3'>
                                <label
                                    for='exampleInputEmail1'
                                    class='form-label'
                                >
                                    Artist
                                </label>
                                <input
                                    type='text'
                                    class='form-control'
                                    id='songName'
                                    aria-describedby='songName'
                                    name='artist'
                                    onChange={inputHandler}
                                />
                            </div>
                            <button
                                type='submit'
                                class='btn btn-primary'
                                // onClick={test}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3>Lista de canciones</h3>
                        <ul class='list-group'>
                            {/* koders.map((koder) => {
                            const {name, lastname, generation} = koder;
                            return (
                              <li className='list-group-item'>{`${name} ${lastname} ${generation}`}
                              </li>
                            )
                           }) */}
                            <li class='list-group-item'>An item</li>
                            <li class='list-group-item'>A second item</li>
                            <li class='list-group-item'>A third item</li>
                            <li class='list-group-item'>A fourth item</li>
                            <li class='list-group-item'>And a fifth one</li>
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
