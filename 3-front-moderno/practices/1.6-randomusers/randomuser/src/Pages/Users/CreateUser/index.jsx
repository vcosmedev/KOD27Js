const CreateUser = () => {
    return (
        <>
            <h2>Create user</h2>
            <form action='' className='p-3 bg-dark-text-white border rounded'>
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
