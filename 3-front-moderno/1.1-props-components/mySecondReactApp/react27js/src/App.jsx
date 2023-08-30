import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div class='card' style='width: 18rem;'>
                <img class='card-img-top' src='...' alt='Card image cap' />
                <div class='card-body'>
                    <h5 class='card-title'>Card title</h5>
                    <p class='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
