import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit } = useForm();

    const saveProduct = async (data) => {
        const response = await fetch(
            'https://javascript27kod-default-rtdb.firebaseio.com/products/.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
            }
        );
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <form
                        onSubmit={handleSubmit(saveProduct)}
                        className='p-3 bg-dark text-white border rounded'
                    >
                        <div className='form-group'>
                            <label htmlFor=''>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                {...register('name')}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Description</label>
                            <input
                                type='text'
                                className='form-control'
                                {...register('description')}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Price</label>
                            <input
                                type='number'
                                className='form-control'
                                {...register('number')}
                            />
                        </div>
                        <button type='submit' className='btn btn-light mt-3'>
                            Create Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
