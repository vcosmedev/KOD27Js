const CreateUser = () => {
    return (
        <>
            <h2 className='mb-3'>Create user</h2>
            <form
                action=''
                className='p-3 bg-dark-text-white border rounded mb-3'
            >
                <div className='form-group'>
                    <label htmlFor=''></label>
                    <input type='text' className='form-control' />
                </div>
            </form>

            <button className='btn btn-primary'>Save user</button>
        </>
    );
};

export default CreateUser;
