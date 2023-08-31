import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    // const [title, setTitle] = useState('Hello Koders');
    // // const [user, setUser] = useState({});
    // const inputHandler = (event) => {
    //     const text = event.target.value;
    //     setTitle(text);
    // };

    // // const userInputHandler = (event) => {
    // //     const property = event.target.value;
    // //     const value = event.target.value;

    // //     setUser({ ...user, [property]: value });
    // // };
    const [language, setLanguage] = useState('esp');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    const getTranslatedText = () => {
        switch (language) {
            case 'eng':
                return 'Good morning';
            case 'fra':
                return 'Bonjour';
            default:
                return 'Buenos días';
        }
    };

    return (
        <>
            {/* <input
                type='text'
                onChange={(event) => {
                    inputHandler(event);
                }}
            />
            <h1>{title}</h1>

            <input
                type='radio'
                class='btn-check'
                name='options-base'
                id='option5'
                autocomplete='off'
                checked
            />
            <label class='btn' for='option5'>
                Español
            </label>

            <input
                type='radio'
                class='btn-check'
                name='options-base'
                id='option6'
                autocomplete='off'
            />
            <label class='btn' for='option6'>
                Inglés
            </label>

            <input
                type='radio'
                class='btn-check'
                name='options-base'
                id='option8'
                autocomplete='off'
            />
            <label class='btn' for='option8'>
                Francés
            </label> */}
            <div>
                <h1>{getTranslatedText()}</h1>

                <div>
                    <input
                        type='radio'
                        id='esp'
                        value='esp'
                        checked={language === 'esp'}
                        onChange={handleChangeLanguage}
                    />
                    <label className='ms-3' htmlFor='esp'>
                        ES 🇪🇸
                    </label>
                </div>
                <div>
                    <input
                        type='radio'
                        id='eng'
                        value='eng'
                        checked={language === 'eng'}
                        onChange={handleChangeLanguage}
                    />
                    <label className='ms-3' htmlFor='eng'>
                        EN 🇬🇧
                    </label>
                </div>
                <div>
                    <input
                        type='radio'
                        id='fra'
                        value='fra'
                        checked={language === 'fra'}
                        onChange={handleChangeLanguage}
                    />
                    <label className='ms-3' htmlFor='fra'>
                        FR 🇫🇷
                    </label>
                </div>
            </div>
        </>
    );
}

export default App;

/* 
 
 Tres radio buttons:
 
 · ESP  · ENG  · FRA

h1 -> Por default dice 'Buenos días'
      - Si selecciono inglés -> 'Good Morning'
      - Si seleciono francés -> 'Bonjour'

 Radio buttons 
 
 */
