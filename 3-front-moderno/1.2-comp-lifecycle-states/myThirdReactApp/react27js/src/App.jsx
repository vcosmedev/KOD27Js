import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GreetingHeading from './components/GreetingHeading';

function App() {
    const [language, setLanguage] = useState('es');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    const greetingMap = {
        es: 'Buenos días',
        en: 'Good morning',
        fr: 'Bonjour',
    };

    return (
        <>
            <div>
                <div>
                    <input
                        type='radio'
                        id='es'
                        value='es'
                        checked={language === 'es'}
                        onChange={handleChangeLanguage}
                    />
                    <label className='ms-3' htmlFor='es'>
                        ES 🇪🇸
                    </label>
                </div>
                <div>
                    <input
                        type='radio'
                        id='en'
                        value='en'
                        checked={language === 'en'}
                        onChange={handleChangeLanguage}
                    />
                    <label className='ms-3' htmlFor='en'>
                        EN 🇬🇧
                    </label>
                </div>
                <div>
                    <input
                        type='radio'
                        id='fr'
                        value='fr'
                        checked={language === 'fr'}
                        onChange={handleChangeLanguage}
                    />
                    <label className='ms-3' htmlFor='fr'>
                        FR 🇫🇷
                    </label>
                </div>
                <GreetingHeading text={greetingMap[language]} />
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
