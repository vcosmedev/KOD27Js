import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <main className='bg-cyan-400 min-h-screen'>
            <nav>
                {/* <a href='/'>Home</a> */}
                {/* <a href='/koders'>Koders</a> */}
                {/* <a href='/koders/jesus'>Jesús</a> */}
                <Link href='/'>Home</Link>
                <Link href='/koders'>Koders</Link>
                <Link href='/koders/jesus'>Jesús</Link>
            </nav>
            <Component {...pageProps} />
        </main>
    );
}
