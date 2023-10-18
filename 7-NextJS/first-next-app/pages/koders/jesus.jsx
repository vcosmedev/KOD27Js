import { useEffect } from 'react';

export default function Jesus() {
    useEffect(() => {
        console.log('Hi from client side');
    });
    return <h1>Hi! This is Jesus</h1>;
}

export function getStaticProps() {
    console.log('Hi from getStaticProps');
    return {
        props: {},
    };
}
