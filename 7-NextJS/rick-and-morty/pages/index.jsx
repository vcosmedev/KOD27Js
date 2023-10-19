import clsx from 'clsx';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <Link
                href='/characters'
                className={clsx(
                    'bg-sky-400 rounded',
                    'text-white text-3xl',
                    'p-3',
                    'hover:bg-sky-600 hover:scale-150 hover:transition-all hover:duration-75'
                )}
            >
                Characters
            </Link>
        </main>
    );
}
