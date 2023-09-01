import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GreetingHeading from './components/GreetingHeading';

function App() {
    const [capital, setCapital] = useState('es');

    const handleCapital = (event) => {
        setCapital(event.target.value);
    };

    const capitalMap = {
        es: 'Madrid',
        uk: 'London',
        fr: 'Paris',
        jp: 'Tokio',
        br: 'Brasilia',
        ca: 'Ottawa',
    };

    return (
        <>
            <div>
                <div className='d-flex justify-content-center'>
                    <input
                        type='radio'
                        id='es'
                        value='es'
                        checked={capital === 'es'}
                        onChange={handleCapital}
                    />
                    <label className='ms-3' htmlFor='es'>
                        ES 🇪🇸
                    </label>
                </div>
                <div className='d-flex justify-content-center'>
                    <input
                        type='radio'
                        id='uk'
                        value='uk'
                        checked={capital === 'uk'}
                        onChange={handleCapital}
                    />
                    <label className='ms-3' htmlFor='uk'>
                        UK 🇬🇧
                    </label>
                </div>
                <div className='d-flex justify-content-center'>
                    <input
                        type='radio'
                        id='fr'
                        value='fr'
                        checked={capital === 'fr'}
                        onChange={handleCapital}
                    />
                    <label className='ms-3' htmlFor='fr'>
                        FR 🇫🇷
                    </label>
                </div>
                <div className='d-flex justify-content-center'>
                    <input
                        type='radio'
                        id='jp'
                        value='jp'
                        checked={capital === 'jp'}
                        onChange={handleCapital}
                    />
                    <label className='ms-3' htmlFor='jp'>
                        JP 🇯🇵
                    </label>
                </div>
                <div className='d-flex justify-content-center'>
                    <input
                        type='radio'
                        id='br'
                        value='br'
                        checked={capital === 'br'}
                        onChange={handleCapital}
                    />
                    <label className='ms-3' htmlFor='br'>
                        BR 🇧🇷
                    </label>
                </div>
                <div className='d-flex justify-content-center'>
                    <input
                        type='radio'
                        id='ca'
                        value='ca'
                        checked={capital === 'ca'}
                        onChange={handleCapital}
                    />
                    <label className='ms-3' htmlFor='ca'>
                        CA 🇨🇦
                    </label>
                </div>
                {/* <h1 className='mt-1'>{greetingMap[language]}</h1> */}
                <h1 className='mt-1'>{capitalMap[capital]}</h1>
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
