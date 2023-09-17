const ListAllUsers = ({ allUsers }) => {
    return (
        <>
            <h2 className='mb-3'>List All Users</h2>
            <ul className='list-group mb-5'>
                {allUsers.map((user) => {
                    const { name, login, picture } = user;
                    return (
                        <li
                            key={login.uuid}
                            className='list-group-item d-flex justify-content-start aling-items-center gap-5'
                        >
                            <img
                                src={picture.thumbnail}
                                alt='Profile Picture'
                                className='rounded-circle img-fluid'
                            />
                            <p className='fw-bold'>{`${name.title}. ${name.first} ${name.last}`}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ListAllUsers;
