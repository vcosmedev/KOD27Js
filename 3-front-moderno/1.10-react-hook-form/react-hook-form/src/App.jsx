import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit } = useForm();
    const saveUser = (data) => console.log(data);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form
                        onSubmit={handleSubmit(saveUser)}
                        className='p-3 bg-dark text-white border rounded'
                    >
                        <div className='form-gropu'>
                            <label htmlFor=''>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                {...register('name')}
                            />
                        </div>
                        <div className='form-gropu'>
                            <label htmlFor=''>Surname</label>
                            <input
                                type='text'
                                className='form-control'
                                {...register('surname')}
                            />
                        </div>
                        <div className='form-gropu'>
                            <label htmlFor=''>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                {...register('email')}
                            />
                        </div>
                        <div className='form-gropu'>
                            <label htmlFor=''>Phone</label>
                            <input
                                type='phone'
                                className='form-control'
                                {...register('phone')}
                            />
                        </div>
                        <div className='form-gropu'>
                            <label htmlFor=''>Address</label>
                            <input
                                type='text'
                                className='form-control'
                                {...register('address')}
                            />
                        </div>
                        <button type='submit' className='btn btn-light mt-3'>
                            Create user
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
