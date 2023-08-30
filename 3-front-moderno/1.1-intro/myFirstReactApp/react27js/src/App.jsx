import './App.css';
import MentorCard from './components/MentorCard';
import CardWrapper from './components/CardWrapper';

function App() {
    return (
        <>
            <MentorCard
                name='Israel'
                description='Front end mentor at Kodemia'
            />
            <MentorCard
                name='Charles'
                description='Backend mentor at Kodemia'
            />
            <CardWrapper content={<h1>H1 test</h1>} />
            <CardWrapper
                content={
                    <ul>
                        <li>Item 01</li>
                        <li>Item 02</li>
                        <li>Item 03</li>
                        <li>Item 04</li>
                        <li>Item 05</li>
                    </ul>
                }
            />
            {/* Contenido dinámico con un componente 'fijo' que es el layout */}
            <CardWrapper>
                <h1>H1 test with children</h1>
                <ul>
                    <li>Item 01</li>
                    <li>Item 02</li>
                    <li>Item 03</li>
                    <li>Item 04</li>
                    <li>Item 05</li>
                </ul>
            </CardWrapper>
        </>
    );
}

export default App;
