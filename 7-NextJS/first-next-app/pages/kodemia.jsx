import { useEffect } from 'react';

export default function Kodemia(props) {
    useEffect(() => {
        console.log('Hello from useEffect');
    }, []);
    const onClick = () => {
        alert('You clicked me!');
    };
    return (
        <>
            <h1>Hello Koders - {props.koderName}</h1>
            <button onClick={onClick}>Click me</button>
        </>
    );
}

// Con esta función decimos una página se renderice del lado del servidor. Se ejecuta del lado del servidor.
export function getServerSideProps() {
    // Traer información necesaria para renderizar la página
    console.log('Hello form server side props');
    return {
        props: {
            koderName: 'moi',
        },
    };
}

// - window.localStorage.getItem('token');
// - NO ES POSIBLE. NO SE PUEDE UTILIZAR LAS APIS DEL LADO DEL NAVEGADOR CUANDO ESTAMOS DEL LADO DEL SERVER

// - Qué recibe esta función? ctx
// - Este ctx está compuesto por req, res
