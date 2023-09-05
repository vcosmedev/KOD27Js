import { useState } from 'react';
import './App.css';

function App() {
    // const [name, setName] = useState(null);
    // const [image, setImage] = useState(null);
    // const [data, setData] = useState([]);
    const [card, setCard] = useState({
        name: '',
        image: '',
    });
    const [cardsList, setCardsList] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);

    // const nameHandler = (event) => {
    //     const value = event.target.value;
    //     setName(value);
    // };

    const cardHandler = (event) => {
        setCard({
            ...card,
            // id: cardList.length + 1,
            [event.target.name]: event.target.value,
        });
    };

    // const imageHandler = (event) => {
    //     const value = event.target.value;
    //     setImage(value);
    // };

    // const saveDataHandler = () => {
    //     const newData = [data];
    //     // const newData = {
    //     //     id: data.length + 1,
    //     //     name: name,
    //     //     image: image,
    //     // };
    //     setData([...data, newData]);
    //     setName('');
    //     setImage('');
    // };

    return (
        <>
            {/* Input name and img */}
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 d-flex align-items-center justify-content-center'>
                        <form>
                            <label
                                htmlFor='name'
                                className='form-label'
                            ></label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                id='name'
                                aria-describedby='text'
                                placeholder='Name'
                                onChange={cardHandler}
                            />
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputText'
                                    className='form-label'
                                ></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='image'
                                    id='image'
                                    placeholder='Image URL'
                                    onChange={cardHandler}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary mb-3'
                                // onClick={saveDataHandler}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                    {/* Cards */}
                    <div className='col-12 col-md-6'>
                        <div className='row'>
                            <div className='col-sm-6 mb-3 mb-sm-0'>
                                <div className='card card-width card-height d-flex flex-column justify-content-center'>
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
                            {/* <div className='col-sm-6 mb-3 mb-sm-0'>
                                <div className='card card-width card-height d-flex flex-column justify-content-center'>
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
                                <div className='card card-width card-height d-flex flex-column justify-content-center'>
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
                                <div className='card card-width card-height d-flex flex-column justify-content-center'>
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
                                <div className='card card-width card-height d-flex flex-column justify-content-center'>
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
                            </div> */}
                            {/* <div className='col-sm-6 mb-3 mb-sm-0 mt-3'>
                                <div className='card card-width card-height d-flex flex-column justify-content-center'>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* List + Alert */}
        </>
    );
}

export default App;
