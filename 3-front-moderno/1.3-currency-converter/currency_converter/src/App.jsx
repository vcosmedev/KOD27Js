import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h1>Ingresa el monto a convertir en MXN</h1>
                        <form
                            action=''
                            className='border rounded border'
                        ></form>
                        <h1>
                            Selecciona la divisa a la que quieres convertir el
                            monto:{' '}
                        </h1>
                    </div>
                    <h1>Valor en divisa</h1>
                    <h2>$$$.$$ divisa</h2>
                </div>
            </div>
        </>
    );
}

export default App;
