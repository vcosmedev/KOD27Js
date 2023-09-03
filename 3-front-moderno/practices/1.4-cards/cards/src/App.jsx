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
                    <div className='col-12 col-md-4 d-flex align-items-center'>
                        <form>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputText1'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleInputText'
                                    aria-describedby='text'
                                    placeholder='Name'
                                    onChange={nameHandler}
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputText'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleInputText'
                                    placeholder='Image URL'
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
                    <div className='col-12 col-md-6'>
                        <div className='row'>
                            <div className='col-sm-6 mb-3 mb-sm-0'>
                                <div className='card card-width card-height  card-bg'>
                                    <div className='card-body'>
                                        <img
                                            src='https://randomuser.me/api/portraits/lego/6.jpg'
                                            className='card-img-top mb-3'
                                            alt='Profile Picture'
                                        />
                                        <h6 className='card-title'>Víctor</h6>
                                        <a
                                            href='#'
                                            className='btn btn-primary btn-styles'
                                        >
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mb-3 mb-sm-0'>
                                <div className='card card-width card-height card-bg'>
                                    <div className='card-body'>
                                        <img
                                            src='https://randomuser.me/api/portraits/lego/8.jpg'
                                            className='card-img-top mb-3'
                                            alt='Profile Picture'
                                        />
                                        <h6 className='card-title'>Ángel</h6>
                                        <a
                                            href='#'
                                            className='btn btn-primary btn-styles'
                                        >
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mb-3 mb-sm-0 mt-3'>
                                <div className='card card-width card-height card-bg'>
                                    <div className='card-body'>
                                        <img
                                            src='https://randomuser.me/api/portraits/lego/4.jpg'
                                            className='card-img-top mb-3'
                                            alt='Profile Picture'
                                        />
                                        <h6 className='card-title'>Nacho</h6>
                                        <a
                                            href='#'
                                            className='btn btn-primary btn-styles'
                                        >
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mb-3 mb-sm-0 mt-3'>
                                <div className='card card-width card-height card-bg'>
                                    <div className='card-body'>
                                        <img
                                            src='https://randomuser.me/api/portraits/lego/7.jpg'
                                            className='card-img-top mb-3'
                                            alt='Profile Picture'
                                        />
                                        <h6 className='card-title'>Rodri</h6>
                                        <a
                                            href='#'
                                            className='btn btn-primary btn-styles'
                                        >
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mb-3 mb-sm-0 mt-3'>
                                <div className='card card-width card-height card-bg'>
                                    <div className='card-body'>
                                        <img
                                            src='https://randomuser.me/api/portraits/lego/2.jpg'
                                            className='card-img-top mb-3'
                                            alt='Profile Picture'
                                        />
                                        <h6 className='card-title'>Eu</h6>
                                        <a
                                            href='#'
                                            className='btn btn-primary btn-styles'
                                        >
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 mb-3 mb-sm-0 mt-3'>
                                <div className='card card-width card-height'>
                                    <div className='card-body'>
                                        <img
                                            src='https://randomuser.me/api/portraits/lego/5.jpg'
                                            className='card-img-top mb-3'
                                            alt='Profile Picture'
                                        />
                                        <h6 className='card-title'>Salva</h6>
                                        <a
                                            href='#'
                                            className='btn btn-primary btn-styles'
                                        >
                                            Add
                                        </a>
                                    </div>
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
