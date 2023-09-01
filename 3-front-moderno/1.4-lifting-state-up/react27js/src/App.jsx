import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [data, setData] = useState([]);

    const nameHandler = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const imageHandler = (event) => {
        const value = event.target.value;
        setImage(value);
    };

    const saveData = () => {
        const newData = { name: name, image: image };
        setData([...data, newData]);
    };
    console.log(data);

    // function addNewTask(event) {
    //     const newTask = {
    //         id: 1,
    //         description: text,
    //         prioridad: radio,
    //         completed: false,
    //     };
    //     setToDoList([...toDoList, newTask]);
    // }

    return (
        <>
            {/* Input name and img */}
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <form>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputEmail1'
                                    className='form-label'
                                >
                                    Name
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                    onChange={nameHandler}
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputURl'
                                    className='form-label'
                                >
                                    Image
                                </label>
                                <input
                                    type='url'
                                    className='form-control'
                                    id='exampleInputUrl'
                                    onChange={imageHandler}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary'
                                onClick={saveData}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                    {/* Cards */}
                    <div className='row'>
                        <div className='col-sm-6 mb-3 mb-sm-0'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Special title treatment
                                    </h5>
                                    <p className='card-text'>
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                    </p>
                                    <a href='#' className='btn btn-primary'>
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Special title treatment
                                    </h5>
                                    <p className='card-text'>
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                    </p>
                                    <a href='#' className='btn btn-primary'>
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* List + Alert */}
        </>
    );
}

export default App;
