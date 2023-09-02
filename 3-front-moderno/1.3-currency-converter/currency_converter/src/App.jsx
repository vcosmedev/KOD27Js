import { useState } from 'react';
import ExchangeResult from './components/ExchangeResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [amount, setAmount] = useState(null);
    const [currency, setCurrency] = useState('USD');

    const amountHandler = (event) => {
        const value = Number(event.target.value);
        setAmount(value);
    };

    const currencyHandler = (event) => {
        const value = event.target.value;
        setCurrency(value);
    };

    const currencyMap = {
        USD: 16.74,
        EUR: 18.3,
        GBP: 21.31,
    };

    const calculateExchange = (amount, currency) =>
        amount / currencyMap[currency];

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h3>Ingresa el monto en MXN a convertir:</h3>
                        <form
                            action=''
                            className='border rounded border-secondary shadow p-3'
                        >
                            <div className='form-group'>
                                <input
                                    type='number'
                                    className='form-control'
                                    onChange={amountHandler}
                                    // onChange={(event) => amountHandler(event)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h5>
                            Selecciona la divisa a la que quieres convertir:{' '}
                        </h5>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='form-check'>
                                    <input
                                        className='form-check-input'
                                        type='radio'
                                        name='currency'
                                        id='flexRadioDefault1'
                                        value='USD'
                                        checked={currency === 'USD'}
                                        onChange={currencyHandler}
                                    />
                                    <label
                                        className='form-check-label'
                                        htmlFor='usd'
                                    >
                                        USD
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input
                                        className='form-check-input'
                                        type='radio'
                                        name='currency'
                                        id='flexRadioDefault1'
                                        value='EUR'
                                        checked={currency === 'EUR'}
                                        onChange={currencyHandler}
                                    />
                                    <label
                                        className='form-check-label'
                                        htmlFor='eur'
                                    >
                                        EUR
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input
                                        className='form-check-input'
                                        type='radio'
                                        name='currency'
                                        id='flexRadioDefault1'
                                        value='GBP'
                                        checked={currency === 'GBP'}
                                        onChange={currencyHandler}
                                    />
                                    <label
                                        className='form-check-label'
                                        htmlFor='gbp'
                                    >
                                        GBP
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <ExchangeResult
                            result={calculateExchange(amount, currency)}
                            currency={currency}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
