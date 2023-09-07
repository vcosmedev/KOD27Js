import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

// useEffect() es un hook que permite ejecutar un callback en la etapa de willmount del ciclo de vida del componente
// (antes de que el componente se monte) y posteriormente permite ser ejecutado tantas veces como cambios
// que se den en una dependencia

function App() {
    const [koders, setKoders] = useState({});
    const [update, setUpdate] = useState(false);
    const [koderData, setKoderData] = useState({});

    // useEffect((callback, dependenciesArray));
    useEffect(() => {
        // Definir función dentro del efecto
        const getKoders = async () => {
            const response = await fetch(
                'https://javascript27kod-default-rtdb.firebaseio.com/koders.json'
            );
            const data = await response.json();
            console.log(data);
            setKoders(data);
        };
        getKoders();
    }, [update]);
    // }, [update, koders]);

    const updateHandler = () => setUpdate(!update);

    const inputHandler = (event) => {
        setKoderData({
            ...koderData,
            [event.target.name]: event.target.value,
        });
    };

    const saveKoder = async () => {
        console.log(koderData);
        const response = await fetch(
            'https://javascript27kod-default-rtdb.firebaseio.com/koders.json',
            {
                method: 'POST',
                body: JSON.stringify(koderData),
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
                    <div className='col-12 col-6-md'>
                        <h1>Koders list</h1>
                        <button
                            className='btn btn-primary mb-3'
                            onClick={updateHandler}
                        >
                            Update List
                        </button>
                        <form action=''>
                            <div className='form-group mb-1'>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='name'
                                    placeholder='name'
                                    onChange={inputHandler}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='surname'
                                    placeholder='surname'
                                    onChange={inputHandler}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-6-md'>
                        <button
                            type='button'
                            className='btn btn-primary mt-3 mb-3'
                            onClick={saveKoder}
                        >
                            Save
                        </button>
                        <ul className='list-group'>
                            {/* {koders.map((koder) => {
                            const { name, lastname, generation } = koder;
                            return (
                                <li className='list-group-item'>{`${name} ${lastname} ${generation}`}</li>
                            );
                        })} */}
                            {Object.keys(koders).map((key) => (
                                <li key={key} className='list-group-item'>
                                    {koders[key].name} {koders[key].surname}
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
