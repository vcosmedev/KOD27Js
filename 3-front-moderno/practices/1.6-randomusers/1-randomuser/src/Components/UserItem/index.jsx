const UserItem = (props) => {
    const { name, login, picture } = props.userData;

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
            <button className='btn btn-primary'>Detail view</button>
        </li>
    );
};

export default UserItem;
