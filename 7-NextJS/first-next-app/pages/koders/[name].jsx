import { useRouter } from 'next/router';

export default function Koder() {
    const router = useRouter();

    return <h1>Koder {router.query.name}</h1>;
}
