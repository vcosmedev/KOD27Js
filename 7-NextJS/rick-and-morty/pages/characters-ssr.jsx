import { clsx } from 'clsx';

export default function Characters(props) {
    return (
        <main className='w-full flex flex-col gap-4'>
            <h1 className='text-3xl bg-green-500 p-6 text-center font-bold'>
                Characters
            </h1>
            <section
                className={clsx(
                    'p-4',
                    'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ',
                    'gap-4',
                    'bg-black/70'
                )}
            >
                {props.characters.map((character) => {
                    return (
                        <article key={character.name}>
                            <img
                                src={character.image}
                                alt={`Character ${character.name}`}
                                className='mx-auto'
                            />
                            <p className='bg-black text-white font-bold text-lg text-center'>
                                {character.name}
                            </p>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}

export async function getServerSideProps() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const json = await response.json();

    const characters = json.results.map((character) => {
        return {
            name: character.name,
            image: character.image,
            status: character.status,
        };
    });
    return { props: { characters } };
}
