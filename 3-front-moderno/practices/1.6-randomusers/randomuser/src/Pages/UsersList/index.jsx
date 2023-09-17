const UsersListPage = ({ usersList }) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <h2>Users List</h2>
                <ul className='list-group'>
                    {usersList.map((user) => {
                        const { name, login, picture } = user;
                        return (
                            <li
                                key={login.uuid}
                                className='list-group-item d-flex justify-content-between align-items-center'
                            >
                                <div
                                    style={{
                                        width: '55px',
                                        height: '55px',
                                    }}
                                >
                                    <img
                                        src={picture.thumbnail}
                                        alt=''
                                        className='avatar rounded-circle img-fluid'
                                    />
                                </div>
                                <span className='fs-2'>
                                    {name.title}. {name.first} {name.last}
                                </span>
                                <button className='btn btn-primary'>
                                    Detail view
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default UsersListPage;
