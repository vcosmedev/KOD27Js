import clsx from 'clsx';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <main
            className={clsx(
                'bg-[url("https://images.alphacoders.com/133/thumb-1920-1330376.png")]',
                'bg-cover bg-center',
                'w-full min-h-screen',
                'flex justify-center items-center'
            )}
        >
            <Component {...pageProps} />
        </main>
    );
}
