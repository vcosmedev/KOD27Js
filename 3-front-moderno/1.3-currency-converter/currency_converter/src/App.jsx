import { useState } from 'react';
import ExchangeResult from './components/ExchangeResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [amount, setAmount] = useState(null);
    const [currency, setCurrency] = useState('USD');
    const [exchangeHistory, setExchangeHistory] = useState([]);

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

    const saveExchange = () => {
        // Item to be added
        const item = `${amount} MXN -> ${calculateExchange(
            amount,
            currency
        )} ${currency}`;
        setExchangeHistory([...exchangeHistory, item]);
        setAmount(0);
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <hr />
                        <h3 className='mt-3'>
                            Ingresa el monto en MXN a convertir:
                        </h3>
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
                                    value={amount}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-md-6'>
                        <hr />
                        <h5 className='mt-3'>
                            Selecciona la divisa a la que quieres convertir:{' '}
                        </h5>
                        <div className='card mb-3'>
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
                    <hr />
                    <div className='col-12 col-md-12 mb-3'>
                        <ExchangeResult
                            result={calculateExchange(amount, currency)}
                            currency={currency}
                        />
                        <button
                            className='btn btn-primary'
                            onClick={saveExchange}
                        >
                            Guardar conversión
                        </button>
                        <hr />
                        <h5>Historial de conversión</h5>
                        <ul className='list-group'>
                            {exchangeHistory.map((item) => {
                                return (
                                    <li className='list-group-item'>{item}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}

export default App;
